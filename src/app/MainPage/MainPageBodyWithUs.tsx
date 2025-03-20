"use client";
import { useState, useEffect } from "react";
import styles from "./MainPageHeader.module.css";

export default function WithUs() {
    interface WithUs {
        title: string;
        description: string;
        url?: string; // Добавляем опциональное поле url
    }

    const [withus, setwithus] = useState<WithUs[] | null>(null); // Изначально null вместо пустого массива
    const [loading, setLoading] = useState(true); // Состояние загрузки

    useEffect(() => {
        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Для отладки
                setwithus(data.bodyData.withus || []); // Устанавливаем пустой массив, если withus отсутствует
                setLoading(false); // Завершаем загрузку
            })
            .catch((error) => {
                console.error("Ошибка загрузки данных:", error);
                setwithus([]); // Устанавливаем пустой массив при ошибке
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Завантаження...</div>;
    }

    return (
        <div className={styles.containerWithUs}>
            <h3>Чому саме з нами?</h3>
            <div className={styles.withuscontainer}>
                {withus && withus.length > 0 ? (
                    withus.map((item, index) => (
                        <div className={styles.withusitem} key={index}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}