"use client";
import { useState, useEffect } from "react";
import styles from "./css/PageCountry.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PageCountry() {
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
        <> <h2 className={styles.h2Country}>Країни</h2>
        <div className={styles.conteiner}>
            {country.map((item, index) => (
                <div key={index} className={styles.categorycontainer}>
                    <Link prefetch={true} href="/" className={styles.categorylink}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.img}
                                alt={item.name}
                                className={styles.categoryimage}
                                loading="lazy"
                                width={180}
                                height={180}
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