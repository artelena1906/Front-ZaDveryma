import { Suspense } from "react";
import PageSearchIndividual from "../PageTours/components/PageSearchIndividual"; // Укажите правильный путь к компоненту
import {Typography } from "@mui/material";

export default function PageTours() {
    return (
        <Suspense
            fallback={
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#556B2F",
                            fontFamily: "Playwrite India",
                            fontStyle: "italic",
                        }}
                    >
                        Завантаження...
                    </Typography>
                </div>
            }
        >
            <PageSearchIndividual />
        </Suspense>
    );
}