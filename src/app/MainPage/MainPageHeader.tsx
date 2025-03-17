"use client"; // Добавляем директиву, так как будем использовать useState и useEffect
import React, { useState, useEffect } from "react";
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

  interface Country {
    id: number;
    name: string;
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { href: "/", text: "Головна" },
    { href: "/PageCountry", text: "Країни" }, 
    { href: "/PageCountry", text: "Тури" },
    {href: "/PageCountry", text: "Мрії"},
    { href: "/PageAboutUs", text: "Блог" },
    { href: "/PageAboutUs", text: "Про нас" },
  ]);

  
  useEffect(() => {
    // Загружаем данные из JSON
    fetch("/MainPageHeader.json")
      .then((res) => res.json())
      .then((data) => {
        const countries = data.bodyData.country.map((country: Country) => ({
          href: `/PageCountryIndividual/${country.id}`,
          text: country.name,
        }));

        // Обновляем menuItems, добавляя страны в пункт "Тури"
        setMenuItems((prevItems) =>
          prevItems.map((item) =>
            item.text === "Країни"
              ? { ...item, subItems: countries }
              : item
          )
        );
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <>
      <div className={styles.containerHeader}>
        <Link prefetch={true} href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/img/text_logo3.png"
              alt="banner"
              width={500}
              height={200}
              className={styles.Logo}
            />
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
  );
}