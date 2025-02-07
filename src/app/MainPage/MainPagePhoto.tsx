"use client";
import { useState, useEffect } from "react";
import styles from "./css/MainPagePhoto.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
interface Photo {
  img: string;
  alt: string;
}

export default function Photo() {
  const [photos, setPhotos] = useState<Photo[]>([]);


  useEffect(() => {
    fetch("/MainPageHeader.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotos(data.bodyData.photo);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        {/* <h2 className={styles.h2}>Фото з наших подорожей</h2> */}
        <Swiper
          modules={[Navigation]}
          navigation
          // slidesPerView={4}
          // slidesOffsetBefore={15} // Отступ слева
          pagination={{ clickable: true }}
          breakpoints={{
            200: {
              slidesPerView: 2,
              spaceBetween: 5, // Уменьшаем отступ для маленьких экранов
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 5, // Отступ для экранов средней ширины
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 10, // Отступ для планшетов
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 10, // Отступ для небольших десктопов
            },
            1350: {
              slidesPerView: 5,
              spaceBetween: 15, // Отступ для широких экранов
            },
          }}
          className={styles.carouselTrack}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className={styles.carouselTrack}>
              <Image
                src={photo.img}
                alt={photo.alt}
                className={styles.image}
                loading="lazy"
                width={260}
                height={150}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className={styles.h}></hr>
    </>
  );
}
