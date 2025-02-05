"use client";
import { useState, useEffect } from "react";
import styles from "./MainPageHeader.module.css";
import Image from "next/image";

interface Photo {
  img: string;
  alt: string;
}

export default function Photo() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/MainPageHeader.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  
        setPhotos(data.bodyData.photo);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const visiblePhotos = photos.slice(currentIndex, currentIndex + 5);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    
  };

  return (
    <>
    <div className={styles.carousel}>
      <h2 className={styles.h2}>Фото з наших подорожей</h2>
      <div className={styles.carouselTrack}>
        {visiblePhotos.map((photo, index) => (
          <Image key={index} src={photo.img} alt={photo.alt} className={styles.image} loading="lazy"/>
        ))}
      </div>

      <div className={styles.dots}>
        {photos.slice(0, photos.length - 4).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
    <hr className={styles.h}></hr>
    </>
  );
}