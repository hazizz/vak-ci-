import React, {useEffect, useState} from 'react';
import moment from "moment";
import Countdown from "./Countdown";
import config from "./config.json";
import Letters from './Letters';

//@ts-ignore
import {CookieBanner} from "@palmabit/react-cookie-law";
import firebase from "firebase";

const Main = (props: {backgroundIndex: number}) => {
    const [currentDate, setCurrentDate] = useState<moment.Moment>(moment());
    const [toDate, setToDate] = useState<moment.Moment>(moment(config.currentYearStart));
    const [reachCount, setReachCount] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(moment());
        }, 1000)
    })

    const mainStyle: React.CSSProperties = {
        backgroundImage: "url('" + config.backgrounds[props.backgroundIndex].image_url + "')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: config.backgrounds[props.backgroundIndex].text_color,
        height: "100vh",
        width: "100vw"
    }

    const reached = () => {
        switch (reachCount) {
            case 0:
                setToDate(moment(config.currentYearEnd));
                break;
            case 1:
                setToDate(moment(config.nextYearStart));
                break;
            case 2:
                setToDate(moment(config.nextYearEnd));
                break;
        }
        setReachCount(reachCount + 1);
    }

    return (
        <main style={mainStyle}>
            <Countdown now={currentDate} end={toDate} reached={reached} reachCounter={reachCount}/>
            {(reachCount % 2) !== 0 ? <Letters now={currentDate} end={toDate}/> : ""}

            <footer>Az oldal elkészültét támogatta a <a href="//hazizz.hu" onClick={() => {
                firebase.analytics().logEvent("navigate_to_main_page");
            }}>Házizz</a>!</footer>

            <CookieBanner
                message="(FEJLESZTŐI VERZIÓ!!! AZ ADATKEZELÉSI NYILATKOZAT NEM TELJES!) A sütik sose mennek vakációzni, és ezen az oldalon is megtalálhatóak. További részletek olvashatsz erről az alábbi linken!"
                showPreferencesOption={false}
                showStatisticsOption={false}
                showMarketingOption={false}
                privacyPolicyLinkText="Adatvédelmi nyilatkozat"
                policyLink="adatkezeles.txt"
                acceptButtonText="Elfogad"
            />
        </main>
    );
}

export default Main;
