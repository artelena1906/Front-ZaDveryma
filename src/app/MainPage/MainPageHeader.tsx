import React from "react";
import styles from "./css/MainPageHeader.module.css";
import Link from "next/link";
import 'swiper/swiper-bundle.css';


export default function Header() {

  //Меню на главной странице
  const menuItems = [
    { href: "#home", text: "Головна" },
    {
      href: "#travel", text: "Тури",
      subItems: [
        { href: "#ukraine", text: "Україна" },
        { href: "#france", text: "Франція" },
        { href: "#italy", text: "Італія" },
        { href: "#italy", text: "Португалія" },
        { href: "#italy", text: "Ісландія" },
      ]
    },
    { href: "#services", text: "Нові горизонти", 
      subItems: [
        { href: "#ukraine", text: "Україна" },
        { href: "#france", text: "Франція" },
        { href: "#italy", text: "Італія" },
        { href: "#italy", text: "Португалія" },
        { href: "#italy", text: "Ісландія" },
      ]
    },
    { href: "#blog", text: "Блог" },
    { href: "#poslugi", text: "Послуги" },
    { href: "#contact", text: "Про нас" }
  ];

  return (
    <>
    <div className={styles.containerHeader}>
      <Link prefetch={true} href="/">
        <div className={styles.logoContainer}>
          <img src="img/Logo.png" alt="banner" className={styles.Logophoto} />
          <img src="img/Zadveryma.png" alt="banner" className={styles.Logo} />
        </div>
      </Link>

      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <a className={styles.menubtn} href={item.href}>
              {item.text}
            </a>
            {item.subItems && (
              <ul className={styles.dropdown}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.href}>{subItem.text}</a>
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

