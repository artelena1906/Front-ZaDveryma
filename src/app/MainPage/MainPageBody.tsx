import React from "react";
import styles from "./MainPageHeader.module.css";
// import CalendarComponent from "./MainPageBodyCalendar";
import News from "./MainPageBodyNews";
import Country from "./MainPageBodyCountry";
import Travel from "./MainPageBodyTravel";


export default function Body() {

    return (
        <div className={styles.containerBody}>
            <div className={styles.leftcolumn}>
                {/* <div className={styles.search}>
                    <input className={styles.searchInput} type="text" placeholder="Пошук..." />
                </div> */}
                {/* <CalendarComponent /> */}
                <News />
            </div>
            <div className={styles.rightcolumn}>
            <Country />
            <Travel/>
            </div>  
        </div>
    );
}