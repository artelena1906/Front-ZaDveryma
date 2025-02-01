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

import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./MainPageHeader.module.css";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/uk'; // Импорт локали

dayjs.locale('uk'); // Установка локали

export default function CalendarComponent() {
    const [date, setDate] = useState<Date | null>(new Date()); // Разрешаем значение null
    const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        const newDate = new Date(date?.getFullYear() || new Date().getFullYear(), selectedMonth, 1);
        setDate(newDate);
        setIsMonthPickerOpen(false);
    };

    // Функция для обработки выбора даты на календаре
    const handleDateChange = (newDate: Date | null) => {
        setDate(newDate); // Позволяет принимать null
    };

    // Получаем текущий месяц и год
    const currentMonth = dayjs().month();
    const currentYear = dayjs().year();

    return (
        <div className={styles.calendar}>
            {/* Заголовок с селектором */}
            <button onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}>
                📅 Вибрати місяць
            </button>

            {/* Список месяцев */}
            {isMonthPickerOpen && (
                <select onChange={handleMonthChange} value={date?.getMonth() || 0}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i}>
                            {dayjs().month(i).format("MMMM")}
                        </option>
                    ))}
                </select>
            )}

            {/* Календарь */}
            <Calendar
                onChange={handleDateChange} // Передаем handleDateChange
                value={date}
                view="month"
                locale="uk"
                navigationLabel={({ date }) => (
                    <span style={{ color: "green", fontWeight: "bold", fontSize:"20px" }}>
                        {dayjs(date).format("MMMM YYYY")}
                    </span>
                )}
                tileClassName={({ date: calendarDate }) => {
                    // Если выбран текущий месяц и дата совпадает с сегодняшним днем
                    if (dayjs(calendarDate).month() === currentMonth && dayjs(calendarDate).isSame(dayjs(), "day")) {
                        return styles.today;
                    }
                    return ""; // Для других месяцев не выделяем сегодняшнюю дату
                }}
                // Убираем выделение сегодняшней даты в календаре, если выбран месяц, отличный от текущего
                tileDisabled={({ date: calendarDate }) => {
                    if (dayjs(calendarDate).month() !== currentMonth) {
                        return true; // Отключаем выделение даты для других месяцев
                    }
                    return false;
                }}
            />
        </div>
    );
}
