"use client";
import { useState, useEffect } from "react";
import styles from "../css/PageCountryIndividual.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function PageCountryIndividual() {
    interface ImageItem {
        url: string;
        alt: string;
    }

    interface TextSection {
        title: string | null;
        description: string;
    }

    interface Country {
        id: number;
        text: TextSection[];
        name: string;
        alt: string;
        imgmap: string;
        image?: ImageItem[];
    }

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
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    width={450}
                    height={250}
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

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={countryData.imgmap}
                            alt={countryData.alt}
                            width={1000}
                            height={600}
                            className={styles.modalImage}
                        />
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            ×
                        </button>
                    </div>
                </div>
            )}

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
                        <TableContainer
                            component={Paper}
                            sx={{
                                width: "calc(100% - 20px)",
                                maxWidth: "100%",
                                overflowX: "auto",
                                margin: "20px auto 20px auto",
                                borderRadius: "15px",
                                boxShadow: "0 3px 6px rgba(54, 53, 53, 0.1)",
                                border: "1px solid rgba(173, 173, 173, 0.3)",
                            }}
                        >
                            <Table sx={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}>
                                <TableHead sx={{ height: "50px" }}>
                                    <TableRow sx={{ backgroundColor: "#F5F5DC" }}>
                                        <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", width: "120px" }}>
                                            <strong>Дата</strong>
                                        </TableCell>
                                        <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", width: "800px" }}>
                                            <strong>Назва туру</strong>
                                        </TableCell>
                                        <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center" }}>
                                            <strong>Наявність місць</strong>
                                        </TableCell>
                                        <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center" }}>
                                            <strong>Організатор</strong>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tours.map((item) => (
                                        <TableRow
                                            key={item.id}
                                            sx={{
                                                cursor: "pointer",
                                                transformOrigin: "center",
                                                transition: "transform 0.3s ease-in-out",
                                                "&:hover": {
                                                    backgroundColor: "#f0f0f0",
                                                    transform: "scaleY(1.1)",
                                                    zIndex: 1,
                                                },
                                                overflow: "hidden",
                                            }}
                                        >
                                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)" }}>
                                                {item.date}
                                            </TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", color: "#556B2F" }}>
                                                <strong style={{ fontFamily: "Playwrite India", fontStyle: "italic", fontWeight: "bold", fontSize: "22px" }}>
                                                    {item.name}
                                                </strong>
                                                <Typography variant="body2" color="gray" style={{ fontSize: "12px", margin: "5px 0 5px 0" }}>
                                                    {item.sity}
                                                </Typography>
                                                <Typography variant="body2" color="black">
                                                    {item.description}
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", textAlign: "center" }}>
                                                {item.seats}
                                            </TableCell>
                                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", textAlign: "center" }}>
                                                {item.provider}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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