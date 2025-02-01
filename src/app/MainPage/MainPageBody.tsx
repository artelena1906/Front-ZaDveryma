"use client";
import { useState, useEffect } from "react";
import styles from "./MainPageHeader.module.css";
import CalendarComponent from "./MainPageBodyCalendar";
import News from "./MainPageBodyNews";
import Country from "./MainPageBodyCountry";


export default function Body() {

    // useEffect(() => {
    //     function generateCalendar() {
    //         const calendarEl = document.getElementById("calendar");
    //         if (!calendarEl) return;

    //         const today = new Date();
    //         const month = today.getMonth();
    //         const year = today.getFullYear();
    //         const firstDay = new Date(year, month, 1).getDay();
    //         const daysInMonth = new Date(year, month + 1, 0).getDate();

    //         let table = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';

    //         for (let i = 0; i < firstDay; i++) {
    //             table += '<td></td>';
    //         }

    //         for (let day = 1; day <= daysInMonth; day++) {
    //             let cssClass = day === today.getDate() ? 'today' : '';
    //             table += `<td class="${cssClass}">${day}</td>`;
    //             if ((firstDay + day) % 7 === 0) {
    //                 table += '</tr><tr>';
    //             }
    //         }

    //         table += '</tr></table>';
    //         calendarEl.innerHTML = table;
    //     }

    //     generateCalendar();
    // }, []);

    // const [days, setDays] = useState<(number | null)[]>([]);
    // const [currentMonth, setCurrentMonth] = useState<string>("");


    // useEffect(() => {
    //     const today = new Date();
    //     const month = today.getMonth();
    //     const year = today.getFullYear();
    //     const firstDay = new Date(year, month, 1).getDay(); // День недели 1-го числа
    //     const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней

    //     // Название месяца
    //     const monthName = today.toLocaleString("uk-UK", { month: "long", year: "numeric" });
    //     setCurrentMonth(monthName);

    //     // Коррекция первого дня (JS: вс = 0, у нас неделя с пн)
    //     const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    //     // Генерация массива дней
    //     const calendarDays: (number | null)[] = Array(adjustedFirstDay).fill(null)
    //         .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

    //     setDays(calendarDays);
    // }, []);

    return (
        <div className={styles.containerBody}>
            <div className={styles.leftcolumn}>
                <div className={styles.search}>
                    <input className={styles.searchInput} type="text" placeholder="Пошук..." />
                </div>
                {/* <div className={styles.calendar}> */}
                <CalendarComponent />
                <News />
            </div>
            {/* <table>
                        <thead>
                            <tr>
                                <th colSpan={7} className={styles.monthHeader}>{currentMonth}</th>
                            </tr>
                            <tr>
                                <th>Пн</th>
                                <th>Вт</th>
                                <th>Ср</th>
                                <th>Чт</th>
                                <th>Пт</th>
                                <th>Сб</th>
                                <th>Нд</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => (
                                <tr key={weekIndex}>
                                    {days.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, index) => (
                                        <td key={index} className={day === new Date().getDate() ? styles.today : ""}>
                                            {day || ""}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
            {/* </div> */}
            <div className={styles.rightcolumn}>
            <Country />
            </div>
            
        </div>
    );
}