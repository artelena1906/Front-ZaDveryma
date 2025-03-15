"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function Travel() {
    type Tour = {
        id: string; // Добавим id для корректной работы с ключами и навигацией
        date: string;
        name: string;
        sity: string;
        description: string;
        seats: number;
        provider: string;
    };

    const [tours, setTours] = useState<Tour[]>([]);
    const [mounted, setMounted] = useState(false);
    const router = useRouter(); // Перенес сюда

    useEffect(() => {
        setMounted(true);
        fetch("/MainPageHeader.json")
            .then((response) => response.json())
            .then((data) => setTours(data.bodyData.tours))
            .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, []);

    if (!mounted) return null; // Ждем монтирования компонента

    return (
        <div>
            <Typography
                sx={{
                    fontSize: {
                        xs: "20px", // для экранов < 600px
                        sm: "24px", // для экранов ≥ 600px
                        md: "30px", // для экранов ≥ 960px
                      },
                    textAlign: "center",
                    // paddingBottom: "10px",
                    fontFamily: "Playwrite India",
                    color: "#556B2F",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    margin: {
                        xs: "10px 0 0 0", // меньшие отступы на маленьких экранах
                        sm: "10px 0 0 0",
                        md: "20px 0 10px 0", // стандартные отступы на средних и больших экранах
                      },
                }}
            >
                Найближчі тури
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    width: "calc(100% - 20px)",
                    maxWidth: "100%",
                    overflowX: "auto",
                    margin: {
                        xs: "10px 0 0 0", // меньшие отступы на маленьких экранах
                        sm: "10px 0 0 0",
                        md: "20px auto 0 auto", // стандартные отступы на средних и больших экранах
                      },
                    borderRadius: "15px",
                    boxShadow: "0 3px 6px rgba(54, 53, 53, 0.1)", // Тень для объема
                    border: "1px solid rgba(173, 173, 173, 0.3)", // Внешняя рамка
                }}
            >
                <div style={{  overflow: "hidden", width: "100%" }}>
                <Table
                    sx={{
                        tableLayout: "fixed", 
                        width: "100%",
                        borderCollapse: "collapse"
                    }}
                >
                    <TableHead sx={{ height: "auto" }}>
                        <TableRow sx={{ backgroundColor: "#F5F5DC"}}>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", 
                                "@media (min-width: 1200px)": {
                                    width: "100px",
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    width: "80px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 800px)": {
                                    width: "70px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    width: "60px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 600px)": {
                                    width: "55px",
                                    fontSize: "8px",
                                    }, 
                                    "@media (max-width: 500px)": {
                                    width: "50px",
                                    fontSize: "8px",
                                    }
                            }}>
                                    <strong>Дата</strong>
                            </TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", 
                                
                                "@media (min-width: 1200px)": {
                                    width: "600px",
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1199px)": {
                                    width: "600px",
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    width: "500px",
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    width: "400px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    width: "350px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 600px)": {
                                    width: "300px",
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 500px)": {
                                    width: "250px",
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 450px)": {
                                    width: "220px",
                                    fontSize: "8px",
                                    }
                                }}>
                                    <strong>Назва туру</strong>
                            </TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", 
                               "@media (min-width: 1200px)": {
                                    fontSize: "14px",
                                    },                               
                               "@media (max-width: 1199px)": {
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    fontSize: "9px",
                                    },
                                    "@media (max-width: 600px)": {
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 500px)": {
                                    fontSize: "7px",
                                    }
                                    }}>
                                    <strong>Наявність місць</strong>
                            </TableCell>
                            <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.1)", textAlign: "center", 
                                 "@media (min-width: 1200px)": {
                                    fontSize: "14px",
                                    },                               
                               "@media (max-width: 1199px)": {
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    fontSize: "9px",
                                    },
                                    "@media (max-width: 600px)": {
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 500px)": {
                                    fontSize: "7px",
                                    }
                                    }}>
                                    <strong>Організатор</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tours.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{
                                    cursor: "pointer",
                                    transformOrigin: "center",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#f0f0f0",
                                        transform: "scaleY(1.1)", // Увеличение строки по обеим осям, но не слишком сильно
                                        zIndex: 1, // Чтобы строка была сверху при эффекте}
                                    },
                                    overflow: "hidden",
                                }}
                                onClick={() => router.push(`/tour/${item.id}`)}
                            >
                                <TableCell
                                    sx={{
                                        border: "1px solid rgba(128, 128, 128, 0.2)", margin: "0", padding: "0",
                                        "@media (min-width: 1200px)": {
                                    fontSize: "14px",
                                    },                               
                               "@media (max-width: 1199px)": {
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    fontSize: "9px",
                                    },
                                    "@media (max-width: 600px)": {
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 500px)": {
                                    fontSize: "7px",
                                    },
                                        textAlign: "center",
                                    }}
                                >
                                    {item.date}</TableCell>
                                    <TableCell
  sx={{
    border: "1px solid rgba(128, 128, 128, 0.2)",
    color: "#556B2F",
  }}
>
  <Typography
    component="strong"
    sx={{
      fontFamily: "Playwrite India",
      fontStyle: "italic",
      fontWeight: "bold",
      "@media (min-width: 1200px)": {
        fontSize: "22px",
      },
      "@media (max-width: 1199px)": {
        fontSize: "22px",
      },
      "@media (max-width: 1000px)": {
        fontSize: "20px",
      },
      "@media (max-width: 800px)": {
        fontSize: "18px",
      },
      "@media (max-width: 700px)": {
        fontSize: "16px",
      },
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
      "@media (max-width: 500px)": {
        fontSize: "12px",
      },
    }}
  >
    {item.name}
  </Typography>
  <Typography
    variant="body2"
    color="gray"
    sx={{ fontSize: "10px", margin: "5px 0" }} 
  >
    {item.sity}
  </Typography>
  <Typography variant="body2" color="black"
  sx={{
    "@media (min-width: 1200px)": {
      fontSize: "14px",
    },
    "@media (max-width: 1199px)": {
      fontSize: "14px",
    },
    "@media (max-width: 1000px)": {
      fontSize: "14px",
    },
    "@media (max-width: 800px)": {
      fontSize: "12px",
    },
    "@media (max-width: 700px)": {
      fontSize: "12px",
    },
    "@media (max-width: 600px)": {
      fontSize: "10px",
    },
    "@media (max-width: 500px)": {
      fontSize: "8px",
    },
  }}
  
  
  >
    {item.description}
  </Typography>
</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)", textAlign: "center",
                                    "@media (min-width: 1200px)": {
                                    fontSize: "14px",
                                    },                               
                               "@media (max-width: 1199px)": {
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    fontSize: "9px",
                                    },
                                    "@media (max-width: 600px)": {
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 500px)": {
                                    fontSize: "7px",
                                    }
                                 }}>{item.seats}</TableCell>
                                <TableCell sx={{ border: "1px solid rgba(128, 128, 128, 0.2)",textAlign: "center",
                                    "@media (min-width: 1200px)": {
                                    fontSize: "14px",
                                    },                               
                               "@media (max-width: 1199px)": {
                                    fontSize: "14px",
                                    },
                                    "@media (max-width: 1000px)": {
                                    fontSize: "12px",
                                    },
                                    "@media (max-width: 800px)": {
                                    fontSize: "10px",
                                    },
                                    "@media (max-width: 700px)": {
                                    fontSize: "9px",
                                    },
                                    "@media (max-width: 600px)": {
                                    fontSize: "8px",
                                    },
                                    "@media (max-width: 500px)": {
                                    fontSize: "7px",
                                    }
                                 }}>{item.provider}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </div>
            </TableContainer>
        </div>
    );
}





// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
// import styles from './css/MainPageBodyTravel.module.css';

// export default function Travel() {
//         type Tour = {
//             id: string; // Добавим id для корректной работы с ключами и навигацией
//             date: string;
//             name: string;
//             sity: string;
//             description: string;
//             seats: number;
//             provider: string;
//         };
    
//         const [tours, setTours] = useState<Tour[]>([]);
//         const [mounted, setMounted] = useState(false);
//         const router = useRouter(); // Перенес сюда
    
//         useEffect(() => {
//             setMounted(true);
//             fetch("/MainPageHeader.json")
//                 .then((response) => response.json())
//                 .then((data) => setTours(data.bodyData.tours))
//                 .catch((error) => console.error("Ошибка загрузки данных:", error));
//         }, []);
    
//         if (!mounted) return null; // Ждем монтирования компонента
    

// return (
//     <div className={styles.container}>
//       <Typography className={styles.title}>Найближчі тури</Typography>
//       <TableContainer component={Paper} className={styles.tableContainer}>
//         <div className={styles.tableWrapper}>
//           <Table className={styles.table}>
//             <TableHead className={styles.tableHead}>
//               <TableRow>
//                 <TableCell className={`${styles.tableHeadCell} ${styles.tableHeadCellDate}`}>
//                   <strong>Дата</strong>
//                 </TableCell>
//                 <TableCell className={`${styles.tableHeadCell} ${styles.tableHeadCellName}`}>
//                   <strong>Назва туру</strong>
//                 </TableCell>
//                 <TableCell className={styles.tableHeadCell}>
//                   <strong>Наявність місць</strong>
//                 </TableCell>
//                 <TableCell className={styles.tableHeadCell}>
//                   <strong>Організатор</strong>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tours.map((item) => (
//                 <TableRow
//                   key={item.id}
//                   className={styles.tableRow}
//                   onClick={() => router.push(`/tour/${item.id}`)}
//                 >
//                   <TableCell className={styles.tableCell}>{item.date}</TableCell>
//                   <TableCell className={styles.tableCell}>
//                     <strong className={styles.tourName}>{item.name}</strong>
//                     <Typography className={styles.tourCity}>{item.sity}</Typography>
//                     <Typography className={styles.tourDescription}>{item.description}</Typography>
//                   </TableCell>
//                   <TableCell className={styles.tableCell}>{item.seats}</TableCell>
//                   <TableCell className={styles.tableCell}>{item.provider}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </TableContainer>
//     </div>
//   );
// }