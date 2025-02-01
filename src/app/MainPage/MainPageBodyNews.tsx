import React from "react";
import styles from "./MainPageHeader.module.css";

export default function News() {
  return (
    <div className={styles.news}>
                <h3>Последние новости</h3>
                <div className={styles.newsitem}>
                    <h4>Заголовок новости 1</h4>
                    <p>Краткое описание новости. Подробнее о событии можно прочитать на нашем блоге.</p>
                    <a href="#">Читать далее</a>
                </div>
                <div className={styles.newsitem}>
                    <h4>Заголовок новости 2</h4>
                    <p>Краткое описание новости. Подробнее о событии можно прочитать на нашем блоге.</p>
                    <a href="#">Читать далее</a>
                </div>
                <div className={styles.newsitem}>
                    <h4>Заголовок новости 3</h4>
                    <p>Краткое описание новости. Подробнее о событии можно прочитать на нашем блоге.</p>
                    <a href="#">Читать далее</a>
                </div>
            </div>
  );
}