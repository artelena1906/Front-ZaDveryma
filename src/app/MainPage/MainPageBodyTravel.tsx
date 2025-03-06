"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function Travel() {
    type Tour = {
        id: string; // Добавим id для корректной работы с ключами и навигацией
        date: string;
        name: string;
        sity: string;
        description: string;
        seats: number;
        provider: string;
    };

    const [tours, setTours] = useState<Tour[]>([]);
    const [mounted, setMounted] = useState(false);
    const router = useRouter(); // Перенес сюда

    useEffect(() => {
        setMounted(true);
        fetch("/MainPageHeader.json")
            .then((response) => response.json())
            .then((data) => setTours(data.bodyData.tours))
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    if (!mounted) return null; // Ждем монтирования компонента

    return (
        <div>
            <Typography
                sx={{
                    fontSize: "30px",
                    textAlign: "center",
                    paddingBottom: "10px",
                    fontFamily: "Playwrite India",
                    color: "#556B2F",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    margin: "20px 0 20px 0",
                }}
            >
                Найближчі тури
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    width: "calc(100% - 20px)",
                    maxWidth: "100%",
                    overflowX: "auto",
                    margin: "20px auto 0 auto",
                    borderRadius: "15px",
                    boxShadow: "0 3px 6px rgba(54, 53, 53, 0.1)", // Тень для объема
                    border: "1px solid rgba(173, 173, 173, 0.3)", // Внешняя рамка
                }}
            >
                <div style={{  overflow: "hidden", width: "100%" }}>
                <Table
                    sx={{
                        tableLayout: "fixed", 
                        width: "100%",
                        borderCollapse: "collapse"
                    }}
                >
                    <TableHead sx={{ height: "50px" }}>
                        <TableRow sx={{ backgroundColor: "#F5F5DC"}}>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", width:"120px"}}><strong>Дата</strong></TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", width:"600px" }}><strong>Назва туру</strong></TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center" }}><strong>Наявність місць</strong></TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center" }}><strong>Організатор</strong></TableCell>
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
                                        transform: "scaleY(1.1)", // Увеличение строки по обеим осям, но не слишком сильно
                                        zIndex: 1, // Чтобы строка была сверху при эффекте}
                                    },
                                    overflow: "hidden",
                                }}
                                onClick={() => router.push(`/tour/${item.id}`)}
                            >
                                <TableCell
                                    sx={{
                                        border: "1px solid rgba(128, 128, 128, 0.2)"
                                    }}
                                >
                                    {item.date}</TableCell>
                                <TableCell
                                    sx={{
                                        border: "1px solid rgba(128, 128, 128, 0.2)",
                                        color: "#556B2F",
                                    }}
                                >
                                    <strong style={{ fontFamily: "Playwrite India", fontStyle: "italic", fontWeight: "bold", fontSize: "22px" }}>
                                        {item.name}
                                    </strong>
                                    <Typography variant="body2" color="gray" style={{fontSize: "12px", margin:"5px 0 5px 0"}}>{item.sity}</Typography>
                                    <Typography variant="body2" color="black">{item.description}</Typography>
                                </TableCell>
                                <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)" }}>{item.seats}</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)" }}>{item.provider}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
            </TableContainer>
        </div>
    );
}
