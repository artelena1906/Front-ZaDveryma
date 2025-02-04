"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function Travel() {
    type Tour = {
        id: string; // Добавим id для корректной работы с ключами и навигацией
        date: string;
        name: string;
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
        <TableContainer
            component={Paper}
            sx={{
                width: "calc(100% - 20px)",
                maxWidth: "100%",
                overflowX: "auto",
                margin: "20px auto 0 auto",
                border: "none",
                boxShadow: "none",
            }}
        >
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
            <Table
                sx={{
                    border: "1px solid gray", // Граница вокруг всей таблицы
                    borderCollapse: "collapse" // Объединяет границы, чтобы не было двойных линий
                }}
            >
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#F5F5DC" }}>
                        <TableCell sx={{ border: "1px solid gray" }}><strong>Дата</strong></TableCell>
                        <TableCell sx={{ border: "1px solid gray" }}><strong>Назва туру</strong></TableCell>
                        <TableCell sx={{ border: "1px solid gray" }}><strong>Наявність місць</strong></TableCell>
                        <TableCell sx={{ border: "1px solid gray" }}><strong>Хто везе</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tours.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                                "&:hover": { backgroundColor: "#f0f0f0" }
                            }}
                            onClick={() => router.push(`/tour/${item.id}`)}
                        >
                            <TableCell sx={{ border: "1px solid gray" }}>{item.date}</TableCell>
                            <TableCell sx={{ border: "1px solid gray" }}>
                                <strong>{item.name}</strong>
                                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                            </TableCell>
                            <TableCell sx={{ border: "1px solid gray" }}>{item.seats}</TableCell>
                            <TableCell sx={{ border: "1px solid gray" }}>{item.provider}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
