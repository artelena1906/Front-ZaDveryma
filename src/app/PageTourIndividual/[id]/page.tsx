"use client";
import { useEffect, useState } from "react";
import styles from "../css/PageTourIndividual.module.css"; // Убедитесь, что путь к CSS правильный
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@mui/material";

interface TourDay {
    day: string;
    description: { text: string }[];
}

interface ImageItem {
    url: string;
    alt: string;
}

interface Tours {
    id: string;
    date: string;
    country: string;
    name: string;
    sity: string;
    image?: ImageItem[];
    tour?: TourDay[];
    seats: string;
    provider: string;
}

export default function PageTourIndividual() {
    const [tour, setTour] = useState<Tours | null>(null);
    const [mounted, setMounted] = useState(false);
    const params = useParams();
    const tourId = params?.id;

    useEffect(() => {
        if (!tourId) return;

        setMounted(true);
        fetch("/MainPageHeader.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedTour = data.bodyData.tours.find(
                    (t: Tours) => t.id.toString() === tourId
                );
                if (selectedTour) {
                    setTour(selectedTour);
                } else {
                    console.error(`Тур с id ${tourId} не найден`);
                }
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, [tourId]);

    if (!mounted) return null;
    if (!tour) return <div>Тур не знайдено або завантаження...</div>;

    return (
        <div className={styles.tourcontainer}>
            <Typography variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", color: "#556B2F", margin: "40px 0 20px 0", textAlign: "center" }}>
                {tour.name}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "center" }}>
                <strong>Дата:</strong> {tour.date}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", marginTop: "20px", textAlign: "center" }}>
                {tour.sity}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", marginTop: "20px", textAlign: "center" }}>
                <strong>Залишилось місць:</strong> {tour.seats}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", textAlign: "center" }}>
                <strong>Організатор:</strong> {tour.provider}
            </Typography>

            {tour.image && tour.image.length > 0 && (
                <div className={styles.imageGallery}>
                    {tour.image.map((img, index) => (
                        <Image
                            key={index}
                            src={img.url}
                            alt={img.alt}
                            width={300}
                            height={200}
                            className={styles.galleryImage}
                        />
                    ))}
                </div>
            )}

            {tour.tour && tour.tour.length > 0 && (
                <div className={styles.tourDays}>                    
                    {tour.tour.map((day, index) => (
                        <div key={index} className={styles.daySection}>
                            <Typography variant="h3" sx={{ fontSize: "1.3rem", fontWeight: "bold", margin: "10px 0 10px 0" }}>
                                {day.day}
                            </Typography>
                            {day.description.map((desc, descIndex) => (
                                <Typography key={descIndex} variant="body2" sx={{ margin: "3px 0", fontSize: "16px", textAlign: "justify" }}>
                                    {desc.text}
                                </Typography>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}