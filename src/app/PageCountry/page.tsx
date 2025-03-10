"use client";
import { useState, useEffect } from "react";
import styles from "./css/PageCountry.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PageCountry() {
    interface Country {
        id: number;
        img: string;
        name: string;
        alt: string;
    }

    const [country, setCountry] = useState<Country[]>([]);

    useEffect(() => {
        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountry(data.bodyData.country);
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    return (
        <>
            <h2 className={styles.h2Country}>Країни</h2>
            <div className={styles.conteiner}>
                {country.map((item) => (
                    <div key={item.id} className={styles.categorycontainer}>
                        <Link 
                            prefetch={true} 
                            href={`/PageCountryIndividual/${item.id}`} // Используем id страны для создания уникального URL
                            className={styles.categorylink}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    className={styles.categoryimage}
                                    loading="lazy"
                                    width={200}
                                    height={200}
                                />
                                <div className={styles.categorytext}>{item.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}