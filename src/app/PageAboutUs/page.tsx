"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Використовуємо Image замість <img>
import styles from "./css/PageAboutUs.module.css";

export default function PageAboutUs() {
    interface AboutUS {
        description: string;
        text: string;
    }

    const [aboutus, setAboutus] = useState<AboutUS | null>(null);

    useEffect(() => {
        fetch("/PageAboutUs.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAboutus(data.bodyData.text);
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    if (!aboutus) {
        return <div className={styles.containeraboutus}>Завантаження...</div>;
    }

    return (
        <div className={styles.containeraboutus}>
            <div className={styles.aboutus}>
                <Image
                    className={styles.img}
                    src="/img/travel.jpg"
                    alt="Про нас"
                    width={500} 
                    height={300} 
                />
                <p className={styles.description}>{aboutus.description}</p>
                <p className={styles.text}>{aboutus.text}</p>
            </div>
            {/* <div className={styles.text}>
                <p>{aboutus.text}</p>
            </div> */}
        </div>
    );
}