"use client";
import { useState, useEffect } from "react";
import styles from "./css/MainPageBodyNews.module.css";

export default function News() {
    interface News {
        id: number;
        title: string;
        description: string;
        url: string;
    }

const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/MainPageNews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.bodyData.news);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);


  return (
    <div>
        <h3 className={styles.h3}>Новини</h3>
        <div className={styles.news}>
            {news.map((item, index) => (
                <div className={styles.newsitem} key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a style={{ display: "block", textAlign: "right" }} href={item.url}>Читати далі ...</a>
                </div>
            ))}
        </div>
    </div>
);
}