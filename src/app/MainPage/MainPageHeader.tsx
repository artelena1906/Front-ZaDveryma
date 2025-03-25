// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "./css/MainPageHeader.module.css";
// import Link from "next/link";
// import 'swiper/swiper-bundle.css';
// import Image from "next/image";

// export default function Header() {
//   interface MenuItem {
//     href: string;
//     text: string;
//     subItems?: { href: string; text: string }[];
//   }

//   interface Country {
//     id: number;
//     name: string;
//   }

//   const [menuItems, setMenuItems] = useState<MenuItem[]>([
//     { href: "/", text: "Головна" },
//     { href: "#", text: "Країни" },
//     { href: "/PageTours", text: "Тури" },
//     { href: "/PageCountry", text: "Мрії" },
//     { href: "/PageAboutUs", text: "Блог" },
//     { href: "/PageAboutUs", text: "Про нас" },
//   ]);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     fetch("/MainPageHeader.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const countries = data.bodyData.country.map((country: Country) => ({
//           href: `/PageCountryIndividual/${country.id}`,
//           text: country.name,
//         }));

//         setMenuItems((prevItems) =>
//           prevItems.map((item) =>
//             item.text === "Країни"
//               ? { ...item, subItems: countries, href: "#" }
//               : item
//           )
//         );
//       })
//       .catch((error) => console.error("Ошибка загрузки данных:", error));
//   }, []);

//   const handleMenuClick = () => {
//     setIsDropdownOpen((prev) => !prev); // Переключаем состояние при клике
//   };

//   const handleMouseEnter = (itemText: string) => {
//     if (itemText === "Країни") {
//       setIsDropdownOpen(true); // Открываем меню только для "Країни"
//     }
//   };

//   const handleMouseLeave = (itemText: string) => {
//     if (itemText === "Країни") {
//       setIsDropdownOpen(false); // Закрываем меню только для "Країни"
//     }
//   };

//   const handleItemClick = () => {
//     setIsDropdownOpen(false); // Закрываем меню после выбора страны
//   };

//   return (
//     <>
//       <div className={styles.containerHeader}>
//         <Link prefetch={true} href="/">
//           <div className={styles.logoContainer}>
//             <Image
//               src="/img/text_logof.png"
//               alt="banner"
//               width={500}
//               height={200}
//               className={styles.Logo}
//             />
//           </div>
//         </Link>

//         <nav className={styles.menu}>
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className={styles.menuItem}
//               onMouseEnter={() => handleMouseEnter(item.text)}
//               onMouseLeave={() => handleMouseLeave(item.text)}
//             >
//               {item.text === "Країни" ? (
//                 <span className={styles.menubtn} onClick={handleMenuClick}>
//                   {item.text}
//                 </span>
//               ) : (
//                 <Link href={item.href} className={styles.menubtn}>
//                   {item.text}
//                 </Link>
//               )}
//               {item.subItems && isDropdownOpen && (
//                 <ul className={styles.dropdown}>
//                   {item.subItems.map((subItem, subIndex) => (
//                     <li key={subIndex} onClick={handleItemClick}>
//                       <Link href={subItem.href}>{subItem.text}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </nav>
//       </div>
//       <hr className={styles.h}></hr>
//     </>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/MainPageHeader.module.css";
import Link from "next/link";
import "swiper/swiper-bundle.css";
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
    { href: "#", text: "Країни" },
    { href: "/PageTours", text: "Тури" },
    { href: "/PageDreams", text: "Мрії" },
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
              ? { ...item, subItems: countries, href: "#" }
              : item
          )
        );
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true); // Открываем меню при наведении
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false); // Закрываем меню, когда уводим курсор
  };

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev); // Переключаем состояние при клике
  };

  const handleItemClick = () => {
    setIsDropdownOpen(false); // Закрываем меню после выбора страны
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
              onMouseEnter={item.text === "Країни" ? handleMouseEnter : undefined}
              onMouseLeave={item.text === "Країни" ? handleMouseLeave : undefined}
            >
              {item.text === "Країни" ? (
                <span className={styles.menubtn} onClick={handleClick}>
                  {item.text}
                </span>
              ) : (
                <Link href={item.href} className={styles.menubtn}>
                  {item.text}
                </Link>
              )}
              {item.subItems && isDropdownOpen && item.text === "Країни" && (
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