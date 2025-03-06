import React from "react";
import styles from "./css/MainPageFooter.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MainPageFooter() {
    return (
        <footer>
            <hr className={styles.h} />
            <div className={styles.containerFooter}>
                <div className={styles.menu}>
                    <ul>
                        <li className={styles.text}>Про подорожі</li>
                        <li><Link href="/PageCountry">Країни</Link></li>
                        <li><Link href="/PageCountry">Мрії</Link></li>
                        <li><Link href="/PageCountry">Блог</Link></li>
                    </ul>
                    <ul>
                        <li className={styles.text}>Наші друзі</li>
                        <li><Link href="/PageCountry">Кухня на підборах</Link></li>
                    </ul>
                    <ul>
                        <li className={styles.text}>Контакти</li>
                        <li className={styles.messenger}>
                            <a href="viber://chat?number=+380XXXXXXXXX">
                                <Image src="/img/messenger/LogoViber.png" alt="Viber" width={32} height={32} />
                            </a>
                            <a href="https://t.me/ZaDveryma">
                                <Image src="/img/messenger/LogoTelegram.png" alt="Telegram" width={32} height={32} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61567874720973&locale=ru_RU">
                                <Image src="/img/messenger/fb.png" alt="Facebook" width={32} height={32} />
                            </a>
                            <a href="https://instagram.com/YourProfile">
                                <Image src="/img/messenger/LogoInstagram.png" alt="Instagram" width={32} height={32} />
                            </a>
                            <a href="https://wa.me/+380XXXXXXXXX">
                                <Image src="/img/messenger/LogoWhatsapp.png" alt="WhatsApp" width={32} height={32} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}