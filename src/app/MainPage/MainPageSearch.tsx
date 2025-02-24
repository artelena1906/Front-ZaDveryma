// "use client";
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { uk } from "date-fns/locale"; 
// import styles from "./css/MainPageSearch.module.css";

// export default function Search() {
//     interface Country {
//         id: number;
//         name: string;
//         alt: string;
//     }

//     const [country, setCountry] = useState<Country[]>([]);
//     const [selectedCountry, setSelectedCountry] = useState<string>("");
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//     const [showCalendar, setShowCalendar] = useState(false);

//     useEffect(() => {
//         fetch("/MainPageHeader.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCountry(data.bodyData.country);
//             })
//             .catch((error) => console.error("Помилка завантаження даних:", error));
//     }, []);

//     return (
//         <>
//             <div className={styles.containerSearch}>
//                 <div className={styles.search}>
//                     {/* Вибір країни */}
//                     <select
//                         className={styles.searchSelect}
//                         name="states"
//                         id="states"
//                         value={selectedCountry}
//                         onChange={(e) => setSelectedCountry(e.target.value)}
//                     >
//                         <option value="" disabled hidden>
//                             Виберіть країну
//                         </option>
//                         {country.map((item) => (
//                             <option key={item.id} value={item.id}>
//                                 {item.name}
//                             </option>
//                         ))}
//                     </select>

//                     <button
//                         className={styles.searchSelect}
//                         onClick={() => setShowCalendar(!showCalendar)}
//                     >
//                         {selectedDate ? selectedDate.toLocaleDateString("uk-UA") : "Виберіть дату"}
//                     </button>
//                     {showCalendar && (
//                         <DatePicker
//                             selected={selectedDate}
//                             onChange={(date) => {
//                                 setSelectedDate(date);
//                                 setShowCalendar(false);
//                             }}
//                             dateFormat="dd MMMM yyyy"
//                             locale={uk} // Устанавливаем украинский язык
//                             inline
//                         />
//                     )}

//                     {/* Кнопка пошуку */}
//                     <button className={styles.btn}>Пошук</button>
//                 </div>
//             </div>
//             <hr className={styles.h}></hr>
//         </>
//     );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { uk } from "date-fns/locale";
// import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
// import styles from "./css/MainPageSearch.module.css";

// export default function Search() {
//     interface Country {
//         id: number;
//         name: string;
//         alt: string;
//     }

//     const [country, setCountry] = useState<Country[]>([]);
//     const [selectedCountry, setSelectedCountry] = useState<string>("");
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//     const [inputValue, setInputValue] = useState("");

//     useEffect(() => {
//         fetch("/MainPageHeader.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 setCountry(data.bodyData.country);
//             })
//             .catch((error) => console.error("Помилка завантаження даних:", error));
//     }, []);

//     const handleDateChange = (newDate: Date | null) => {
//         setSelectedDate(newDate);
//         if (newDate) {
//             setInputValue(newDate.toLocaleDateString("uk-UA", {
//                 day: "2-digit",
//                 month: "2-digit",
//                 year: "numeric"
//             }));
//         } else {
//             setInputValue("");
//         }
//     };

//     return (
//         <>
//             <div className={styles.containerSearch}>
//                 <div className={styles.search}>
//                     {/* Выбор страны через MUI Select */}
//                     <FormControl fullWidth variant="outlined">
//                         <InputLabel id="select-country-label">Виберіть країну</InputLabel>
//                         <Select
//                             labelId="select-country-label"
//                             value={selectedCountry}
//                             onChange={(e) => setSelectedCountry(e.target.value)}
//                             label="Виберіть країну"
//                             className={styles.searchSelect}
//                             sx={{
//                                 borderRadius: "12px",
//                                 padding: "0",
//                                 "&:hover": {
//                                     backgroundColor: "rgb(240, 240, 240)",
//                                     border: "2px solid #4E6F2E",
//                                 },
//                                 "& .MuiOutlinedInput-root": {
//                                     "& fieldset": {
//                                         border: "2px solid #678F4E",
//                                     },
//                                     "&:hover fieldset": {
//                                         border: "2px solid #678F4E",
//                                     },
//                                     "&.Mui-focused fieldset": {
//                                         border: "2px solid #678F4E",
//                                     }
//                                 }
//                             }}
//                         >
//                             <MenuItem value="" disabled>
//                                 Виберіть країну
//                             </MenuItem>
//                             {country.map((item) => (
//                                 <MenuItem key={item.id} value={item.id}>
//                                     {item.name}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>

//                     {/* Выбор даты с Material UI DatePicker */}
//                     <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={uk}>
//                         <DesktopDatePicker
//                             value={selectedDate}
//                             onChange={handleDateChange}
//                             format="dd.MM.yyyy"
//                             slots={{
//                                 textField: (params) => (
//                                     <TextField
//                                         {...params}
//                                         value={inputValue}
//                                         readOnly // Запрещаем редактирование вручную
//                                         onFocus={() => setInputValue("Виберіть дату в календарі")}
//                                         onBlur={() => {
//                                             if (!selectedDate) setInputValue("");
//                                         }}
//                                         placeholder="Виберіть дату"
//                                         sx={{
//                                             backgroundColor: "rgb(248, 246, 246)",
//                                             borderRadius: "12px",
//                                             border: "3px solid #678F4E",
//                                             transition: "0.3s",
//                                             width: "300px",
//                                             "&:hover": {
//                                                 backgroundColor: "rgb(240, 240, 240)",
//                                                 border: "3px solid #4E6F2E",
//                                             },
//                                             "& .MuiOutlinedInput-root": {
//                                                 "& fieldset": { border: "none" },
//                                                 "&:hover fieldset": { border: "none" },
//                                                 "&.Mui-focused fieldset": { border: "none" },
//                                             },
//                                             // Цвет текста по умолчанию
//                                             "& .MuiInputBase-root": {
//                                                 "& .MuiInputBase-input": {
//                                                     color: "#757575", // Цвет текста по умолчанию
//                                                 },
//                                             },
//                                             // "& .MuiInputBase-input::placeholder": {
//                                             //     color: "black", // Цвет плейсхолдера
//                                             // },
//                                             // Цвет текста при фокусе
//                                             "& .MuiInputBase-input:focus": {
//                                                 color: "red", // Цвет текста при фокусе
//                                             }
//                                         }}
//                                     />
//                                 )
//                             }}
//                         />
//                     </LocalizationProvider>

//                     {/* Кнопка поиска */}
//                     <button className={styles.btn}>Пошук</button>
//                 </div>
//             </div>
//             <hr className={styles.h}></hr>
//         </>
//     );
// }

"use client"
import { useState, useEffect } from "react";
import styles from "./css/MainPageSearch.module.css"; // Подключите ваши стили

export default function Search() {
    interface Country {
        id: number;
        name: string;
    }

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");

    useEffect(() => {
        fetch("/MainPageHeader.json")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data.bodyData.country); // Подставьте актуальный путь к данным
            })
            .catch((error) => console.error("Помилка завантаження даних:", error));
    }, []);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
    };

    const handleSearch = () => {
        console.log("Выбрана страна:", selectedCountry);
        console.log("Выбрана дата:", selectedDate);
        // Логика для поиска или перехода на другую страницу
    };

    return (
        <>
        <div className={styles.containerSearch}>
            <div className={styles.search}>
                {/* Выбор страны */}
                <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className={styles.select}
                >
                    <option value="" disabled>Виберіть країну</option>
                    {countries.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>

                {/* Выбор даты */}
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className={styles.dateInput}
                    placeholder="Виберіть дату"
                />

                {/* Кнопка поиска */}
                <button className={styles.btn} onClick={handleSearch}>
                    Пошук
                </button>
            </div>
        </div>
        <hr className={styles.h}></hr>
        </>
    );
}
