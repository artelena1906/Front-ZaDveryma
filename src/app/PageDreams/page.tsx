"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./css/PageDreams.module.css";
import WithUs from "../MainPage/MainPageBodyWithUs";

export default function PageDreams() {
  interface CountryItem {
    namecountry: string;
    descriptioncountry: string;
    urlphoto: string;
  }

  interface DreamsItem {
    title: string;
    description: string;
    country: CountryItem[];
  }

  const [dreams, setDreams] = useState<DreamsItem | null>(null);

  useEffect(() => {
    fetch("/PageDreams.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Не удалось загрузить JSON");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Загруженные данные:", data);
        setDreams(data.bodyData);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, []);

  if (!dreams) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.containerDreams}>
      <h3>{dreams.title}</h3>
      <p>{dreams.description}</p>
      <div className={styles.container}>
      {dreams.country && dreams.country.length > 0 ? (
        dreams.country.map((country, index) => (
          <div key={index} className={styles.containerCountry}>
            <h4>{country.namecountry}</h4>
            <Image
              src={country.urlphoto}
              alt={country.namecountry}
              width={300}
              height={200}
            />
          
            <p>{country.descriptioncountry}</p>
            <div className={styles.Button}>
            <button className={styles.interestedButton}>Долучитися до мрії!</button>
            </div>
          </div>
        ))
      ) : (
        <p>Країни відсутні</p>
      )}
      </div>
      <div>
      <WithUs />
      </div>
    </div>
  );
}