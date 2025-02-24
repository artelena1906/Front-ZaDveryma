"use client";
import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import styles from "./MainPageHeader.module.css";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import 'dayjs/locale/uk';

dayjs.locale('uk');

export default function CalendarComponent() {
    const [date, setDate] = useState(() => new Date().toISOString());
    const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false); // Состояние для открытия/закрытия селектора выбора месяца
    const [selectedMonth, setSelectedMonth] = useState(dayjs().month()); // Хранит выбранный месяц

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newselectedMonth = parseInt(event.target.value, 10);
        setSelectedMonth(newselectedMonth);

        const newDate = new Date(new Date(date).getFullYear(), selectedMonth, 1);
        setDate(newDate.toISOString());

        setIsMonthPickerOpen(false);

        // Меняем только месяц, оставляя текущий день
        setDate((prevDate) => {
            const currentDay = prevDate ? dayjs(prevDate).date() : 1;
            const newDate = dayjs(prevDate).month(newselectedMonth).date(currentDay);
            return newDate.toISOString(); // Преобразуем в строку
        });
    };

    const handleDateChange: CalendarProps["onChange"] = (newDate) => {
        if (!newDate || Array.isArray(newDate)) return; // Проверяем на null и массив

        setDate(newDate.toISOString()); // Сохраняем в виде строки
    };

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

            <Calendar className="customCalendar"
                onChange={handleDateChange}
                value={new Date(date)} // Преобразуем обратно в Date перед передачей в компонент
                view="month"
                locale="uk"
                navigationLabel={({ date }) => (
                    <span className="custom-calendar-label">
                        {dayjs(date).format("MMMM YYYY")}
                    </span>
                )}
                tileClassName={({ date: calendarDate }) => {
                    const isToday = dayjs(calendarDate).isSame(dayjs(), "day"); // Проверяем, является ли дата сегодняшней
                    const isCurrentMonth = dayjs(calendarDate).month() === selectedMonth; // Проверяем, принадлежит ли день выбранному месяцу
                    const isFirstDayOfMonth = dayjs(calendarDate).date() === 1; // Проверяем, является ли дата первым числом месяца

                    // Если это сегодня, выделяем зелёным
                    if (isToday) return styles.today;

                    // Если это первое число выбранного месяца, не выделяем его синим
                    if (isFirstDayOfMonth && isCurrentMonth) return styles.noHighlight;

                    // Если день не принадлежит выбранному месяцу, закрашиваем светло-серым
                    if (!isCurrentMonth) return styles.otherMonthDay;

                    // Для всех остальных случаев
                    return "";
                }}
            />
        </div>
    );
}