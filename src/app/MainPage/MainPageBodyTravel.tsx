"use client";
import { useEffect, useState } from "react";
import styles from "./MainPageHeader.module.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function Travel() {

    type Tour = {
        date: string;
        name: string;
        description: string;
        seats: number;
        provider: string;
    };

      const [tours, setTours] = useState<Tour[]>([]);
      const [mounted, setMounted] = useState(false);

    

    useEffect(() => {
        setMounted(true);
        fetch("/MainPageHeader.json")
            .then((response) => response.json())
            .then((data) => setTours(data.bodyData.tours))
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    if (!mounted) return null; // Возвращаем `null`, пока компонент не смонтируется

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "20px auto" }}>
            <Typography variant="h6" align="center" sx={{ margin: "10px 0" }}>
                Найближчі тури
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Дата</strong></TableCell>
                        <TableCell><strong>Назва туру</strong></TableCell>
                        <TableCell><strong>Наявність місць</strong></TableCell>
                        <TableCell><strong>Хто везе</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tours.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>
                                <strong>{item.name}</strong>
                                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                            </TableCell>
                            <TableCell>{item.seats}</TableCell>
                            <TableCell>{item.provider}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

