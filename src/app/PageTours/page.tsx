// "use client";
// import { useState, useEffect } from "react";
// import styles from "./css/PageTours.module.css";
// import { useRouter } from "next/navigation";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

// export default function PageTours() {
//     interface Tour {
//         id: string;
//         date: string;
//         country?: string;
//         name: string;
//         sity: string;
//         description: string;
//         seats: string;
//         provider: string;
//     }

//     const [tours, setTours] = useState<Tour[]>([]);
//     const router = useRouter();

//     useEffect(() => {
//         fetch("/MainPageHeader.json")
//             .then((res) => res.json())
//             .then((data) => {
//                 // Загружаем все туры без фильтрации
//                 setTours(data.bodyData.tours);
//             })
//             .catch((error) => console.error("Ошибка загрузки данных:", error));
//     }, []); 

//     // Функция для группировки туров по месяцам
//     const groupToursByMonth = (tours: Tour[]) => {
//         const months = [
//             "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
//             "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
//         ];
//         const grouped: { [key: string]: Tour[] } = {};

//         tours.forEach((tour) => {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const [day, month, year] = tour.date.split(".");
//             const monthIndex = parseInt(month, 10) - 1; 
//             const monthName = months[monthIndex];
//             if (!grouped[monthName]) {
//                 grouped[monthName] = [];
//             }
//             grouped[monthName].push(tour);
//         });

//         // Сортировка месяцев по порядку
//         const sortedGrouped: { [key: string]: Tour[] } = {};
//         months.forEach((month) => {
//             if (grouped[month]) {
//                 sortedGrouped[month] = grouped[month];
//             }
//         });

//         return sortedGrouped;
//     };

//     const handleTourClick = (tourId: string) => {
//         router.push(`/PageTourIndividual/${tourId}`);
//     };

//     if (tours.length === 0) {
//         return <div>Loading...</div>;
//     }

//     const groupedTours = groupToursByMonth(tours);

//     return (
//         <div className={styles.container}>
//             <p>Ви відкриваєте список турів, і це не просто маршрути та дати. Це запрошення відправитися туди, де вас чекають відкриття, незвідані стежки та моменти, що залишаться з вами назавжди.</p>
//             <p>Тут кожна подорож — як перегортання сторінок захопливої книги, де ви головний герой. </p>
//             <p>Який розділ цієї історії стане вашим?</p>
//             <p>Обирайте маршрут — і нехай перша сторінка вашої нової пригоди відкриється просто зараз.</p>
//             {/* Секция туров */}
//             <div className={styles.containertour}>
//                 {Object.keys(groupedTours).length > 0 ? (
//                     Object.entries(groupedTours).map(([month, monthTours]) => (
//                         <div key={month} style={{ marginBottom: "40px" }}>
//                             <Typography
//                                 sx={{
//                                     fontSize: {
//                                         xs: "20px",
//                                         sm: "24px",
//                                         md: "28px",
//                                     },
//                                     textAlign: "center",
//                                     fontFamily: "Playwrite India",
//                                     color: "#556B2F",
//                                     fontStyle: "italic",
//                                     fontWeight: "bold",
//                                     margin: "0",
//                                 }}
//                             >
//                                 {month}
//                             </Typography>
//                             <TableContainer
//                                 component={Paper}
//                                 sx={{
//                                     maxWidth: "100%",
//                                     overflowX: "auto",
//                                     margin: {
//                                         xs: "10px 0 0 0",
//                                         sm: "10px 0 0 0",
//                                         md: "10px auto 0 auto",
//                                     },
//                                     borderRadius: "15px",
//                                     boxShadow: "0 3px 6px rgba(54, 53, 53, 0.1)",
//                                     border: "1px solid rgba(173, 173, 173, 0.3)",
//                                 }}
//                             >
//                                 <Table sx={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}>
//                                     <TableHead sx={{ height: "auto" }}>
//                                         <TableRow sx={{ backgroundColor: "#F5F5DC" }}>
//                                             <TableCell sx={{
//                                                 border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center",
//                                                 "@media (min-width: 1200px)": { width: "100px", fontSize: "12px" },
//                                                 "@media (max-width: 1000px)": { width: "80px", fontSize: "10px" },
//                                                 "@media (max-width: 800px)": { width: "70px", fontSize: "10px" },
//                                                 "@media (max-width: 700px)": { width: "60px", fontSize: "10px" },
//                                                 "@media (max-width: 600px)": { width: "55px", fontSize: "8px" },
//                                                 "@media (max-width: 500px)": { width: "50px", fontSize: "8px" },
//                                             }}>
//                                                 <strong>Дата</strong>
//                                             </TableCell>
//                                             <TableCell sx={{
//                                                 border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center",
//                                                 "@media (min-width: 1200px)": { width: "800px", fontSize: "14px" },
//                                                 "@media (max-width: 1199px)": { width: "600px", fontSize: "14px" },
//                                                 "@media (max-width: 1000px)": { width: "500px", fontSize: "12px" },
//                                                 "@media (max-width: 800px)": { width: "400px", fontSize: "10px" },
//                                                 "@media (max-width: 700px)": { width: "350px", fontSize: "10px" },
//                                                 "@media (max-width: 600px)": { width: "300px", fontSize: "10px" },
//                                                 "@media (max-width: 500px)": { width: "250px", fontSize: "8px" },
//                                                 "@media (max-width: 450px)": { width: "200px", fontSize: "8px" },
//                                             }}>
//                                                 <strong>Назва туру</strong>
//                                             </TableCell>
//                                             <TableCell sx={{
//                                                 border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", margin: "0", padding: "0", lineHeight: "1.2",
//                                                 "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                 "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                 "@media (max-width: 1000px)": { fontSize: "12px" },
//                                                 "@media (max-width: 800px)": { fontSize: "10px" },
//                                                 "@media (max-width: 700px)": { fontSize: "9px" },
//                                                 "@media (max-width: 600px)": { fontSize: "8px" },
//                                                 "@media (max-width: 500px)": { fontSize: "7px" },
//                                             }}>
//                                                 <strong>Наявність місць</strong>
//                                             </TableCell>
//                                             <TableCell sx={{
//                                                 border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", margin: "0", padding: "0",
//                                                 "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                 "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                 "@media (max-width: 1000px)": { fontSize: "12px" },
//                                                 "@media (max-width: 800px)": { fontSize: "10px" },
//                                                 "@media (max-width: 700px)": { fontSize: "9px" },
//                                                 "@media (max-width: 600px)": { fontSize: "8px" },
//                                                 "@media (max-width: 500px)": { fontSize: "7px" },
//                                             }}>
//                                                 <strong>Партнер</strong>
//                                             </TableCell>
//                                         </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                         {monthTours.map((item) => (
//                                             <TableRow
//                                                 key={item.id}
//                                                 sx={{
//                                                     cursor: "pointer",
//                                                     transformOrigin: "center",
//                                                     transition: "transform 0.3s ease-in-out",
//                                                     "&:hover": {
//                                                         backgroundColor: "#f0f0f0",
//                                                         transform: "scaleY(1.1)",
//                                                         zIndex: 1,
//                                                     },
//                                                     overflow: "hidden",
//                                                 }}
//                                                 onClick={() => handleTourClick(item.id)}
//                                             >
//                                                 <TableCell sx={{
//                                                     border: "1px solid rgba(128, 128, 128, 0.2)", margin: "0", padding: "0",
//                                                     "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1000px)": { fontSize: "12px" },
//                                                     "@media (max-width: 800px)": { fontSize: "10px" },
//                                                     "@media (max-width: 700px)": { fontSize: "9px" },
//                                                     "@media (max-width: 600px)": { fontSize: "8px" },
//                                                     "@media (max-width: 500px)": { fontSize: "7px" },
//                                                     textAlign: "center",
//                                                 }}>
//                                                     {item.date}
//                                                 </TableCell>
//                                                 <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", color: "#556B2F" }}>
//                                                     <Typography component="strong" sx={{
//                                                         fontFamily: "Playwrite India",
//                                                         fontStyle: "italic",
//                                                         fontWeight: "bold",
//                                                         "@media (min-width: 1200px)": { fontSize: "22px" },
//                                                         "@media (max-width: 1199px)": { fontSize: "22px" },
//                                                         "@media (max-width: 1000px)": { fontSize: "20px" },
//                                                         "@media (max-width: 800px)": { fontSize: "18px" },
//                                                         "@media (max-width: 700px)": { fontSize: "16px" },
//                                                         "@media (max-width: 600px)": { fontSize: "14px" },
//                                                         "@media (max-width: 500px)": { fontSize: "12px" },
//                                                     }}>
//                                                         {item.name}
//                                                     </Typography>
//                                                     <Typography variant="body2" color="gray" sx={{
//                                                         fontSize: "10px", margin: "0",
//                                                         "@media (max-width: 700px)": { fontSize: "8px" },
//                                                     }}>
//                                                         {item.sity}
//                                                     </Typography>
//                                                     <Typography variant="body2" color="black" sx={{
//                                                         "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                         "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                         "@media (max-width: 1000px)": { fontSize: "14px" },
//                                                         "@media (max-width: 800px)": { fontSize: "12px" },
//                                                         "@media (max-width: 700px)": { fontSize: "12px" },
//                                                         "@media (max-width: 600px)": { fontSize: "10px" },
//                                                         "@media (max-width: 500px)": { fontSize: "8px" },
//                                                     }}>
//                                                         {item.description}
//                                                     </Typography>
//                                                 </TableCell>
//                                                 <TableCell sx={{
//                                                     border: "1px solid rgba(128, 128, 128, 0.2)", textAlign: "center", margin: "0", padding: "0",
//                                                     "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1000px)": { fontSize: "12px" },
//                                                     "@media (max-width: 800px)": { fontSize: "10px" },
//                                                     "@media (max-width: 700px)": { fontSize: "9px" },
//                                                     "@media (max-width: 600px)": { fontSize: "8px" },
//                                                     "@media (max-width: 500px)": { fontSize: "7px" },
//                                                 }}>
//                                                     {item.seats}
//                                                 </TableCell>
//                                                 <TableCell sx={{
//                                                     border: "1px solid rgba(128, 128, 128, 0.2)", textAlign: "center", margin: "0", padding: "0",
//                                                     "@media (min-width: 1200px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1199px)": { fontSize: "14px" },
//                                                     "@media (max-width: 1000px)": { fontSize: "12px" },
//                                                     "@media (max-width: 800px)": { fontSize: "10px" },
//                                                     "@media (max-width: 700px)": { fontSize: "9px" },
//                                                     "@media (max-width: 600px)": { fontSize: "8px" },
//                                                     "@media (max-width: 500px)": { fontSize: "7px" },
//                                                 }}>
//                                                     {item.provider}
//                                                 </TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>
//                         </div>
//                     ))
//                 ) : (
//                     <Typography
//                         sx={{
//                             textAlign: "center",
//                             marginTop: "20px",
//                             fontSize: "20px",
//                             color: "#556B2F",
//                             fontFamily: "Playwrite India",
//                             fontStyle: "italic",
//                         }}
//                     >
//                         Тури в розробці
//                     </Typography>
//                 )}
//             </div>
//         </div>
//     );
// }

"use client";
import { useState, useEffect } from "react";
import styles from "./css/PageTours.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import Search from "../MainPage/MainPageSearch";

// Отключаем статическую генерацию, чтобы useSearchParams работал без Suspense
export const dynamic = "force-dynamic";
interface Tour {
        id: string;
        date: string;
        country: string;
        name: string;
        sity: string;
        description: string;
        seats: string;
        provider: string;
    }

export default function PageTour() {
    
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Проверяем, что код выполняется на клиенте
        if (typeof window === "undefined") return;

        const fetchTours = async () => {
            try {
                setLoading(true);
                const res = await fetch("/MainPageHeader.json");
                if (!res.ok) throw new Error("Не вдалося завантажити дані");
                const data = await res.json();

                const allTours = data.bodyData.tours;
                const country = searchParams.get("country") || "Всі країни";
                const dateStr = searchParams.get("date");

                const filteredTours = allTours.filter((tour: Tour) => {
                    const tourDate = parseTourDate(tour.date);
                    const selectedDate = dateStr ? new Date(dateStr) : null;

                    const matchesCountry = country === "Всі країни" ? true : tour.country === country;
                    const matchesDate = selectedDate ? tourDate >= selectedDate : true;

                    return matchesCountry && matchesDate;
                });

                setTours(filteredTours);
                setError(null);
            } catch (err) {
                setError("Помилка при завантаженні турів");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, [searchParams]);

    const parseTourDate = (dateStr: string): Date => {
        const [day, month, year] = dateStr.split(".").map(Number);
        return new Date(year, month - 1, day);
    };

    // Функция для группировки туров по году и месяцу
    const groupToursByYearAndMonth = (tours: Tour[]) => {
        const months = [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
            "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
        ];

        const grouped: { [year: string]: { [month: string]: Tour[] } } = {};

        tours.forEach((tour) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [day, month, year] = tour.date.split(".");
            const monthIndex = parseInt(month, 10) - 1;
            const monthName = months[monthIndex];
            const yearStr = year.toString();

            if (!grouped[yearStr]) {
                grouped[yearStr] = {};
            }
            if (!grouped[yearStr][monthName]) {
                grouped[yearStr][monthName] = [];
            }
            grouped[yearStr][monthName].push(tour);
        });

        const sortedGroups: { title: string; tours: Tour[] }[] = [];
        Object.keys(grouped)
            .sort()
            .forEach((year) => {
                months.forEach((month) => {
                    if (grouped[year][month]) {
                        sortedGroups.push({
                            title: `${month} ${year}`,
                            tours: grouped[year][month],
                        });
                    }
                });
            });

        return sortedGroups;
    };

    const handleTourClick = (tourId: string) => {
        router.push(`/PageTourIndividual/${tourId}`);
    };

    if (loading) {
        return (
            <Typography
                sx={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "20px",
                    color: "#556B2F",
                    fontFamily: "Playwrite India",
                    fontStyle: "italic",
                }}
            >
                Немає турів за вашими критеріями
            </Typography>
        );
    }

    if (error) {
        return (
            <Typography
                sx={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "20px",
                    color: "#FF0000",
                    fontFamily: "Playwrite India",
                    fontStyle: "italic",
                }}
            >
                {error}
            </Typography>
        );
    }

    // Отображаем сообщение, если туров нет
    if (tours.length === 0) {
        return (
            <Typography
                sx={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "20px",
                    color: "#556B2F",
                    fontFamily: "Playwrite India",
                    fontStyle: "italic",
                }}
            >
                Немає турів за вашими критеріями
            </Typography>
        );
    }

    const groupedTours = groupToursByYearAndMonth(tours);

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Search />
            </div>
            <hr className={styles.h}/>
            <p>Ви відкрили список турів, і це не просто маршрути та дати. Це запрошення відправитися туди, де вас чекають відкриття, незвідані стежки та моменти, що залишаться з вами назавжди.</p>
            <p>Тут кожна подорож — як перегортання сторінок захопливої книги, де ви головний герой. </p>
            <p>Який розділ цієї історії стане вашим?</p>
            <p>Обирайте маршрут — і нехай перша сторінка вашої нової пригоди відкриється просто зараз.</p>
            {/* Секция туров */}
            <div className={styles.containertour}>
                {groupedTours.length > 0 ? (
                    groupedTours.map((group) => (
                        <div key={group.title} style={{ marginBottom: "40px" }}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "20px",
                                        sm: "24px",
                                        md: "28px",
                                    },
                                    textAlign: "center",
                                    fontFamily: "Playwrite India",
                                    color: "#556B2F",
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    margin: "0",
                                }}
                            >
                                {group.title} {/* Исправлено с month на group.title */}
                            </Typography>
                            <TableContainer
                                component={Paper}
                                sx={{
                                    maxWidth: "100%",
                                    overflowX: "auto",
                                    margin: {
                                        xs: "10px 0 0 0",
                                        sm: "10px 0 0 0",
                                        md: "10px auto 0 auto",
                                    },
                                    borderRadius: "15px",
                                    boxShadow: "0 3px 6px rgba(54, 53, 53, 0.5)",
                                    border: "1px solid rgba(173, 173, 173, 0.3)",
                                }}
                            >
                                <Table sx={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}>
                                    <TableHead sx={{ height: "auto" }}>
                                        <TableRow sx={{ backgroundColor: "#F5F5DC" }}>
                                            <TableCell
                                                sx={{
                                                    border: "1px solid rgba(128, 128, 128, 0.1)",
                                                    textAlign: "center",
                                                    "@media (min-width: 1200px)": { width: "100px", fontSize: "12px" },
                                                    "@media (max-width: 1000px)": { width: "80px", fontSize: "10px" },
                                                    "@media (max-width: 800px)": { width: "70px", fontSize: "10px" },
                                                    "@media (max-width: 700px)": { width: "60px", fontSize: "10px" },
                                                    "@media (max-width: 600px)": { width: "55px", fontSize: "8px" },
                                                    "@media (max-width: 500px)": { width: "50px", fontSize: "8px" },
                                                }}
                                            >
                                                <strong>Дата</strong>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    border: "1px solid rgba(128, 128, 128, 0.1)",
                                                    textAlign: "center",
                                                    "@media (min-width: 1200px)": { width: "800px", fontSize: "14px" },
                                                    "@media (max-width: 1199px)": { width: "600px", fontSize: "14px" },
                                                    "@media (max-width: 1000px)": { width: "500px", fontSize: "12px" },
                                                    "@media (max-width: 800px)": { width: "400px", fontSize: "10px" },
                                                    "@media (max-width: 700px)": { width: "350px", fontSize: "10px" },
                                                    "@media (max-width: 600px)": { width: "300px", fontSize: "10px" },
                                                    "@media (max-width: 500px)": { width: "250px", fontSize: "8px" },
                                                    "@media (max-width: 450px)": { width: "200px", fontSize: "8px" },
                                                }}
                                            >
                                                <strong>Назва туру</strong>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    border: "1px solid rgba(128, 128, 128, 0.1)",
                                                    textAlign: "center",
                                                    margin: "0",
                                                    padding: "0",
                                                    lineHeight: "1.2",
                                                    "@media (min-width: 1200px)": { fontSize: "14px" },
                                                    "@media (max-width: 1199px)": { fontSize: "14px" },
                                                    "@media (max-width: 1000px)": { fontSize: "12px" },
                                                    "@media (max-width: 800px)": { fontSize: "10px" },
                                                    "@media (max-width: 700px)": { fontSize: "9px" },
                                                    "@media (max-width: 600px)": { fontSize: "8px" },
                                                    "@media (max-width: 500px)": { fontSize: "7px" },
                                                }}
                                            >
                                                <strong>Наявність місць</strong>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    border: "1px solid rgba(128, 128, 128, 0.1)",
                                                    textAlign: "center",
                                                    margin: "0",
                                                    padding: "0",
                                                    "@media (min-width: 1200px)": { fontSize: "14px" },
                                                    "@media (max-width: 1199px)": { fontSize: "14px" },
                                                    "@media (max-width: 1000px)": { fontSize: "12px" },
                                                    "@media (max-width: 800px)": { fontSize: "10px" },
                                                    "@media (max-width: 700px)": { fontSize: "9px" },
                                                    "@media (max-width: 600px)": { fontSize: "8px" },
                                                    "@media (max-width: 500px)": { fontSize: "7px" },
                                                }}
                                            >
                                                <strong>Партнер</strong>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {group.tours.map((item) => ( // Исправлено с monthTours на group.tours
                                            <TableRow
                                                key={item.id}
                                                sx={{
                                                    cursor: "pointer",
                                                    transformOrigin: "center",
                                                    transition: "transform 0.3s ease-in-out",
                                                    "&:hover": {
                                                        backgroundColor: "#f0f0f0",
                                                        transform: "scaleY(1.1)",
                                                        zIndex: 1,
                                                    },
                                                    overflow: "hidden",
                                                }}
                                                onClick={() => handleTourClick(item.id)}
                                            >
                                                <TableCell
                                                    sx={{
                                                        border: "1px solid rgba(128, 128, 128, 0.2)",
                                                        margin: "0",
                                                        padding: "0",
                                                        "@media (min-width: 1200px)": { fontSize: "14px" },
                                                        "@media (max-width: 1199px)": { fontSize: "14px" },
                                                        "@media (max-width: 1000px)": { fontSize: "12px" },
                                                        "@media (max-width: 800px)": { fontSize: "10px" },
                                                        "@media (max-width: 700px)": { fontSize: "9px" },
                                                        "@media (max-width: 600px)": { fontSize: "8px" },
                                                        "@media (max-width: 500px)": { fontSize: "7px" },
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {item.date}
                                                </TableCell>
                                                <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", color: "#556B2F" }}>
                                                    <Typography
                                                        component="strong"
                                                        sx={{
                                                            fontFamily: "Playwrite India",
                                                            fontStyle: "italic",
                                                            fontWeight: "bold",
                                                            "@media (min-width: 1200px)": { fontSize: "22px" },
                                                            "@media (max-width: 1199px)": { fontSize: "22px" },
                                                            "@media (max-width: 1000px)": { fontSize: "20px" },
                                                            "@media (max-width: 800px)": { fontSize: "18px" },
                                                            "@media (max-width: 700px)": { fontSize: "16px" },
                                                            "@media (max-width: 600px)": { fontSize: "14px" },
                                                            "@media (max-width: 500px)": { fontSize: "12px" },
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="gray"
                                                        sx={{
                                                            fontSize: "10px",
                                                            margin: "0",
                                                            "@media (max-width: 700px)": { fontSize: "8px" },
                                                        }}
                                                    >
                                                        {item.sity}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="black"
                                                        sx={{
                                                            "@media (min-width: 1200px)": { fontSize: "14px" },
                                                            "@media (max-width: 1199px)": { fontSize: "14px" },
                                                            "@media (max-width: 1000px)": { fontSize: "14px" },
                                                            "@media (max-width: 800px)": { fontSize: "12px" },
                                                            "@media (max-width: 700px)": { fontSize: "12px" },
                                                            "@media (max-width: 600px)": { fontSize: "10px" },
                                                            "@media (max-width: 500px)": { fontSize: "8px" },
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        border: "1px solid rgba(128, 128, 128, 0.2)",
                                                        textAlign: "center",
                                                        margin: "0",
                                                        padding: "0",
                                                        "@media (min-width: 1200px)": { fontSize: "14px" },
                                                        "@media (max-width: 1199px)": { fontSize: "14px" },
                                                        "@media (max-width: 1000px)": { fontSize: "12px" },
                                                        "@media (max-width: 800px)": { fontSize: "10px" },
                                                        "@media (max-width: 700px)": { fontSize: "9px" },
                                                        "@media (max-width: 600px)": { fontSize: "8px" },
                                                        "@media (max-width: 500px)": { fontSize: "7px" },
                                                    }}
                                                >
                                                    {item.seats}
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        border: "1px solid rgba(128, 128, 128, 0.2)",
                                                        textAlign: "center",
                                                        margin: "0",
                                                        padding: "0",
                                                        "@media (min-width: 1200px)": { fontSize: "14px" },
                                                        "@media (max-width: 1199px)": { fontSize: "14px" },
                                                        "@media (max-width: 1000px)": { fontSize: "12px" },
                                                        "@media (max-width: 800px)": { fontSize: "10px" },
                                                        "@media (max-width: 700px)": { fontSize: "9px" },
                                                        "@media (max-width: 600px)": { fontSize: "8px" },
                                                        "@media (max-width: 500px)": { fontSize: "7px" },
                                                    }}
                                                >
                                                    {item.provider}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ))
                ) : (
                    <Typography
                        sx={{
                            textAlign: "center",
                            marginTop: "20px",
                            fontSize: "20px",
                            color: "#556B2F",
                            fontFamily: "Playwrite India",
                            fontStyle: "italic",
                        }}
                    >
                        Немає турів за вашими критеріями
                    </Typography>
                )}
            </div>
        </div>
    );
}