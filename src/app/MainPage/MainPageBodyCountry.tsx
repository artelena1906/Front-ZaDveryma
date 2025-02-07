"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./MainPageHeader.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Country() {
    interface Country {
        img: string;
        name: string;
        alt: string;
    }

    const [country, setCountry] = useState<Country[]>([]);
    // const swiperRef = useRef<any>(null); 
    const swiperRef = useRef<SwiperClass | null>(null);


    useEffect(() => {
        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountry(data.bodyData.country);
            })
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    // Обработчик для прокрутки к первой стране на выбранную букву
    const handleAlphabetClick = (letter: string) => {
        const index = country.findIndex((item) => item.name.startsWith(letter));
        if (index !== -1 && swiperRef.current) {
            swiperRef.current.slideTo(index); // Убираем `.swiper`
        }
    }
    // Украинский алфавит
    const ukrainianAlphabet = "АБВГІКМНПРСТУФХЧШЯ";

    return (
        <div className={styles.container}>
            <h2 className={styles.h2Country}>Країни</h2>

            <div className={styles.categorycontainer}>
                {/* Карусель стран */}
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Сохраняем объект Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    // navigation
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >

                    {country.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.categoryitem}>
                                <Link prefetch={true} href='/' className={styles.categorylink}>
                                    <Image src={item.img} alt={item.name} className={styles.categoryimage} loading="lazy"
                                        width={180}
                                        height={180}
                                    />
                                    <div className={styles.categorytext}>{item.name}</div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Алфавит для прокрутки */}
            <div className={styles.alphabetContainer}>
                {ukrainianAlphabet.split("").map((letter, index) => (
                    <button
                        key={index}
                        className={styles.alphabetLetter}
                        onClick={() => handleAlphabetClick(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}
