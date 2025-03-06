import React from "react";
import styles from "./css/MainPageHeader.module.css";
import Link from "next/link";
import 'swiper/swiper-bundle.css';
import Image from "next/image";


export default function Header() {

  interface MenuItem {
    href: string;
    text: string;
    subItems?: { href: string; text: string }[];
}

const menuItems: MenuItem[] = [
  { href: "/", text: "Головна" },
  {
      href: "/PageCountry",
      text: "Тури",
      subItems: [
          { href: "/PageCountry", text: "Україна" },
          { href: "/PageCountry", text: "Франція" },
          { href: "/PageCountry", text: "Італія" },
          { href: "/PageCountry", text: "Португалія" },
          { href: "/PageCountry", text: "Ісландія" },
      ],
  },
  {
      href: "/PageCountry",
      text: "Мрії",
      subItems: [
          { href: "/PageCountry", text: "Китай" },
          { href: "/PageCountry", text: "Японія" },
          { href: "/PageCountry", text: "Нова Зеландія" },
          { href: "/PageCountry", text: "В'єтнам" }, // Виправлено опечатку
          { href: "/PageCountry", text: "Південна Америка" },
          { href: "/PageCountry", text: "Кенія" },
      ],
  },
  { href: "/PageAboutUs", text: "Блог" },
  { href: "/PageCountry", text: "Послуги" },
  { href: "/PageAboutUs", text: "Про нас" },
];

  return (
    <>
    <div className={styles.containerHeader}>
      <Link prefetch={true} href="/">
        <div className={styles.logoContainer}>
          {/* <img src="img/Logo.png" alt="banner" className={styles.Logophoto} /> */}
          <Image 
          src="/img/Logo2.png" 
          alt="banner" 
          width={200}
          height={100}
          className={styles.Logo} />
        </div>
      </Link>

      <nav className={styles.menu}>
    {menuItems.map((item, index) => (
        <div key={index} className={styles.menuItem}>
            <Link href={item.href} className={styles.menubtn}>
                {item.text}
            </Link>
            {item.subItems && (
                <ul className={styles.dropdown}>
                    {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                            <Link href={subItem.href}>{subItem.text}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    ))}
</nav>
    </div>
    <hr className={styles.h}></hr>
    </>
  )
}

