"use client";
import { useState, useEffect } from "react";
import styles from "../css/PageCountryIndividual.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function PageCountryIndividual() {
    // Интерфейс для изображений
    interface ImageItem {
        url: string;
        alt: string;
    }

    // Интерфейс для текстового блока
    interface TextSection {
        title: string | null;
        description: string;
    }

    // Интерфейс для страны
    interface Country {
        id: number;
        text: TextSection[];
        name: string;
        alt: string;
        imgmap: string;
        image?: ImageItem[];
    }

    // Интерфейс для тура
    interface Tour {
        id: string;
        date: string;
        country?: string;
        name: string;
        sity: string;
        description: string;
        seats: string;
        provider: string;
    }

    const [countryData, setCountryData] = useState<Country | null>(null);
    const [tours, setTours] = useState<Tour[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Стан для модального вікна
    const params = useParams();
    const countryId = params?.id;

    useEffect(() => {
        if (!countryId) return;

        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedCountry = data.bodyData.country.find(
                    (c: Country) => c.id.toString() === countryId
                );
                if (selectedCountry) {
                    setCountryData(selectedCountry);
                    const filteredTours = data.bodyData.tours.filter((tour: Tour) =>
                        tour.country && tour.country.toLowerCase() === selectedCountry.name.toLowerCase()
                    );
                    setTours(filteredTours);
                } else {
                    console.error(`Страна с id ${countryId} не найдена`);
                }
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, [countryId]);

    // Функція для відкриття/закриття модального вікна
    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!countryData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1>{countryData.name}</h1>
            <div className={styles.introSection}>
                <Image
                    src={countryData.imgmap}
                    alt={countryData.alt}
                    width={400}
                    height={200}
                    className={styles.mapImage}
                    onClick={handleImageClick} 
                    style={{ cursor: "pointer" }} 
                />
                {countryData.text && countryData.text.length > 0 && (
                    <p className={styles.introDescription}>
                        {countryData.text[0].description}
                    </p>
                )}
            </div>
            {countryData.text && countryData.text.length > 1 && (
                <div className={styles.textSection}>
                    {countryData.text.slice(1).map((section, index) => (
                        <div key={index} className={styles.textBlock}>
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {countryData.image && countryData.image.length > 0 && (
                <div className={styles.imageGallery}>
                    {countryData.image.map((img, index) => (
                        <Image
                            key={index}
                            src={img.url}
                            alt={img.alt}
                            width={200}
                            height={200}
                            className={styles.galleryImage}
                        />
                    ))}
                </div>
            )}

            {/* Модальне вікно */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={countryData.imgmap}
                            alt={countryData.alt}
                            width={800} // Збільшений розмір для модального вікна
                            height={800}
                            className={styles.modalImage}
                        />
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* Решта коду з таблицею турів */}
            <div className={styles.containertour}>
                {tours.length > 0 ? (
                    <>
                        <Typography
                            sx={{
                                fontSize: "30px",
                                textAlign: "center",
                                fontFamily: "Playwrite India",
                                color: "#556B2F",
                                fontStyle: "italic",
                                fontWeight: "bold",
                            }}
                        >
                            Тури
                        </Typography>
                        <TableContainer component={Paper}>
                            {/* Таблиця турів */}
                        </TableContainer>
                    </>
                ) : (
                    <Typography
                        sx={{
                            textAlign: "center",
                            marginTop: "20px",
                            fontSize: "20px",
                            color: "#556B2F",
                            fontFamily: "Playwrite India",
                            fontStyle: "italic",
                        }}
                    >
                        За даним направленням тури в розробці
                    </Typography>
                )}
            </div>
        </div>
    );
}