"use client";
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
    { href: "/PageCountry", text: "Мрії" },
    { href: "/PageAboutUs", text: "Блог" },
    { href: "/PageAboutUs", text: "Про нас" },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("/MainPageHeader.json")
      .then((res) => res.json())
      .then((data) => {
        const countries = data.bodyData.country.map((country: Country) => ({
          href: `/PageCountryIndividual/${country.id}`,
          text: country.name,
        }));

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

  const handleItemClick = () => {
    setIsDropdownOpen(false); // Закрываем меню после выбора
  };

  return (
    <>
      <div className={styles.containerHeader}>
        <Link prefetch={true} href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/img/text_logof.png"
              alt="banner"
              width={500}
              height={200}
              className={styles.Logo}
            />
          </div>
        </Link>

        <nav className={styles.menu}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onMouseEnter={() => item.subItems && setIsDropdownOpen(true)}
              onMouseLeave={() => item.subItems && setIsDropdownOpen(false)}
            >
              <Link href={item.href} className={styles.menubtn}>
                {item.text}
              </Link>
              {item.subItems && isDropdownOpen && (
                <ul className={styles.dropdown}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={handleItemClick}>
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