"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./MainPageHeader.module.css";

export default function Country() {

    interface Country {
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
        <div className={styles.container}>
            <h2 className={styles.h2Country}>Країни</h2>
            <div className={styles.categorycontainer}>
                {country.map((item, index) => (
                    <div className={styles.categoryitem} key={index}>
                        <Link prefetch={true} href='/' className={styles.categorylink}>
                            <img src={item.img} alt={item.name} className={styles.categoryimage} />
                            <div className={styles.categorytext}>{item.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}