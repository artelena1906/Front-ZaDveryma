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
          slidesPerView={4}
          slidesOffsetBefore={15} // Отступ слева
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 1 },
            800: { slidesPerView: 2 }, // Планшеты
            1024: { slidesPerView: 3 }, // Небольшие десктопы
            1200: { slidesPerView: 5 }, // Широкие экраны
          }}
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
