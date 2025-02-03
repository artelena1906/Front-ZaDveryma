// import { useState } from "react";
// import Calendar from "react-calendar";
// import styles from "./MainPageHeader.module.css";
// import "react-calendar/dist/Calendar.css";
// import dayjs from "dayjs";
// import 'dayjs/locale/uk'; // Импорт локали
// import { uk } from 'date-fns/locale';

// dayjs.locale('uk'); // Установка локали

// export default function CalendarComponent() {
//     const [date, setDate] = useState<Date | null>(new Date()); // Разрешаем значение null
//     const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

//     const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedMonth = parseInt(event.target.value, 10);
//         const newDate = new Date(date?.getFullYear() || new Date().getFullYear(), selectedMonth, 1);
//         setDate(newDate);
//         setIsMonthPickerOpen(false);
//     };

//     // Функция для обработки выбора даты на календаре
//     const handleDateChange = (newDate: Date | null) => {
//         setDate(newDate); // Позволяет принимать null
//     };

//     return (
//         <div className={styles.calendar}>
//             {/* Заголовок с селектором */}           
//                 <button onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}>
//                     📅 Вибрати місяць
//                 </button>
           
//             {/* Список месяцев */}
//             {isMonthPickerOpen && (
//                 <select onChange={handleMonthChange} value={date?.getMonth() || 0}>
//                     {Array.from({ length: 12 }, (_, i) => (
//                         <option key={i} value={i}>
//                             {dayjs().month(i).format("MMMM")}
//                         </option>
//                     ))}
//                 </select>
//             )}

//             {/* Календарь */}
//             <Calendar
//                 onChange={handleDateChange} // Передаем handleDateChange
//                 value={date}
//                 view="month"
//                 locale="uk"
//                 navigationLabel={({ date }) => (
//                     <span style={{ color: "green", fontWeight: "bold", fontSize:"20px" }}>
//                       {dayjs(date).format("MMMM YYYY")}
//                     </span>
//                      )}
//                     tileClassName={({ date: calendarDate }) =>
//                         dayjs(calendarDate).isSame(dayjs(), "day") ? styles.today : ""
//                       }
//             />
//         </div>
//     );
// }

"use client";
import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar"; // Импортируем CalendarProps
import styles from "./MainPageHeader.module.css";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/uk';

dayjs.locale('uk');

export default function CalendarComponent() {
    const [date, setDate] = useState(() => new Date().toISOString());
    const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        const newDate = new Date(new Date(date).getFullYear(), selectedMonth, 1);
        setDate(newDate.toISOString());
        setIsMonthPickerOpen(false);
    };

    const handleDateChange: CalendarProps["onChange"] = (newDate) => {
        if (!newDate || Array.isArray(newDate)) return; // Проверяем на null и массив
    
        setDate(newDate.toISOString()); // Сохраняем в виде строки
    };

    // Текущий месяц
    const currentMonth = dayjs(date).month();

    return (
        <div className={styles.calendar}>
            <button onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}>
                📅 Вибрати місяць
            </button>

            {isMonthPickerOpen && (
                <select onChange={handleMonthChange} value={new Date(date).getMonth()}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i}>
                            {dayjs().month(i).format("MMMM")}
                        </option>
                    ))}
                </select>
            )}

            <Calendar
                onChange={handleDateChange}
                value={new Date(date)} // Преобразуем обратно в Date перед передачей в компонент
                view="month"
                locale="uk"
                navigationLabel={({ date }) => (
                    <span style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>
                        {dayjs(date).format("MMMM YYYY")}
                    </span>
                )}
                tileClassName={({ date: calendarDate }) => 
                    dayjs(calendarDate).isSame(dayjs(), "day") ? styles.today : ""
                }
                tileDisabled={({ date: calendarDate }) => 
                    dayjs(calendarDate).month() !== currentMonth
                }
            />
        </div>
    );
}

