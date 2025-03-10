"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./css/MainPageSearch.module.css";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import Select from "react-select";
import { StylesConfig } from "react-select"; // Импортируем тип StylesConfig

registerLocale("uk", uk);

// Определяем интерфейс для опций Select (value и label)
interface OptionType {
    value: string;
    label: string;
}

export default function Search() {
    interface Country {
        id: number;
        name: string;
    }

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isClient, setIsClient] = useState(false);
    const datePickerRef = useRef<any>(null);

    useEffect(() => {
        setIsClient(true);
        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.bodyData.country);
            })
            .catch((error) => console.error("Помилка завантаження даних:", error));
    }, []);

    const handleCountryChange = (option: OptionType | null) => {
        setSelectedCountry(option ? option.value : "");
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleSearch = () => {
        console.log("Выбрана страна:", selectedCountry);
        console.log("Выбрана дата:", selectedDate ? selectedDate.toISOString().split("T")[0] : "");
    };

    const openDatePicker = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };

    // Определяем стили с типизацией
    const selectStyles: StylesConfig<OptionType, false> = {
        control: (base, state) => ({
            ...base,
            padding: "5px",
            minHeight: "40px",
            border: "3px solid #4E6F2E",
            borderRadius: "12px",
            fontSize: "16px",
            backgroundColor: "rgb(240, 240, 240)",
            width: "300px",
            boxShadow: state.isFocused ? "none" : "none", 
            "&:hover": {
                border: "3px solid #4E6F2E", 
            },
            transform: state.isFocused ? "translateY(-2px)" : "none",
        }),
        placeholder: (base) => ({
            ...base,
            color: "rgb(158, 157, 157)",
            textAlign: "left",
        }),
        singleValue: (base) => ({
            ...base,
            color: "black",
            textAlign: "left",
        }),
        valueContainer: (base) => ({
            ...base,
            padding: "0",
        }),
        option: (base, state) => ({
        ...base,
        backgroundColor: state.isFocused ? "#93C572" : "white",
        color: "black",
        "&:hover": {
            backgroundColor: "#93C572",
        },
    }),
    };

    if (!isClient) {
        return null; // Ничего не рендерим на сервере
    }

    return (
        <div className={styles.containerSearch}>
            <div className={styles.search}>
                <div className={styles.selectWrapper}>
                    <Select
                        options={countries.map((item) => ({ value: item.id.toString(), label: item.name }))}
                        value={
                            countries.find((item) => item.id === Number(selectedCountry))
                                ? { value: selectedCountry, label: countries.find((item) => item.id === Number(selectedCountry))!.name }
                                : null
                        }
                        onChange={handleCountryChange}
                        placeholder="Виберіть країну"
                        className={styles.reactSelect}
                        classNamePrefix="react-select"
                        styles={selectStyles} // Используем типизированные стили
                    />
                </div>

                <div className={styles.dateWrapper}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className={styles.dateInput}
                        placeholderText="Виберіть дату"
                        dateFormat="dd-MM-yyyy"
                        locale="uk"
                        popperPlacement="bottom-start"
                        ref={datePickerRef}
                        onFocus={() => openDatePicker()}
                    />
                    <Image
                        src="/img/calendar.png"
                        alt="Календар"
                        width={24}
                        height={24}
                        className={styles.calendarIcon}
                        onClick={openDatePicker}
                    />
                </div>

                <button className={styles.btn} onClick={handleSearch}>
                    Пошук
                </button>
            </div>
        </div>
    );
}