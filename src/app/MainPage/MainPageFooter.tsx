import React from "react";
import styles from "./css/MainPageFooter.module.css";

export default function MainPageFooter() {
    return (
        <footer>
            <>
            <hr className={styles.h}></hr>
            <div className={styles.containerFooter}>
            <div className={styles.menu}>
                <ul>
                    <li>Країни</li>
                    <li><a href="#">Тури</a></li>
                    <li><a href="#">Мрії</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
                <ul>
                    <li><a href="#">Тури</a></li>
                    <li><a href="#">Мрії</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
                <ul>
                    <li><a href="#">Тури</a></li>
                    <li><a href="#">Мрії</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
            </div>
            </div>
            </>
        </footer>
    );
}