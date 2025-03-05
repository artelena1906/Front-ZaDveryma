import React from "react";
import styles from "./css/MainPageFooter.module.css";
import Link from "next/link"; 

export default function MainPageFooter() {
    return (
        <footer>
            <hr className={styles.h} />
            <div className={styles.containerFooter}>
                <div className={styles.menu}>
                    <ul>
                        <li className={styles.text}>Про подорожі</li>
                        <li><Link href="/PageCountry">Країни</Link></li>
                        <li><a href="#">Мрії</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                    <ul>
                        <li className={styles.text}>Наші друзі</li>
                        <li><a href="#">Кухня на підборах</a></li>
                    </ul>
                    <ul>
                        <li className={styles.text}>Контакти</li>
                        <li className={styles.messenger}>
                            <a href="viber://chat?number=+380XXXXXXXXX">
                                <img src="img/messenger/LogoViber.png" alt="Viber" width="32" height="32" />
                            </a>
                            <a href="https://t.me/ZaDveryma">
                                <img src="img/messenger/LogoTelegram.png" alt="Telegram" width="32" height="32" />
                            </a>
                            <a href="https://facebook.com/YourProfile">
                                <img src="img/messenger/fb.png" alt="Facebook" width="32" height="32" />
                            </a>
                            <a href="https://instagram.com/YourProfile">
                                <img src="img/messenger/LogoInstagram.png" alt="Instagram" width="32" height="32" />
                            </a>
                            <a href="https://wa.me/+380XXXXXXXXX">
                                <img src="img/messenger/LogoWhatsapp.png" alt="WhatsApp" width="32" height="32" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}