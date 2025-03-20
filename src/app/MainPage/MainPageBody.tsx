import React from "react";
import styles from "./MainPageHeader.module.css";
import News from "./MainPageBodyNews";
import Country from "./MainPageBodyCountry";
import Travel from "./MainPageBodyTravel";
import WithUs from "./MainPageBodyWithUs";


export default function Body() {

    return (
        <>
            <div className={styles.containerBody}>
                <div className={styles.leftcolumn}>
                    <News />
                </div>
                <div className={styles.rightcolumn}>
                    <Country />
                    <Travel />
                </div>
            </div>
            <div>
                <WithUs />
            </div>
        </>


    );
}