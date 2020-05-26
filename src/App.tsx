import React, {useEffect, useState} from 'react';
import moment from "moment";
import Countdown from "./Countdown";
import config from "./config.json";
import Letters from './Letters';


const App = () => {
    const [currentDate, setCurrentDate] = useState<moment.Moment>(moment());
    const [toDate, setToDate] = useState<moment.Moment>(moment(config.currentYearStart));
    let [reachCount, setReachCount] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(moment());
        }, 1000);
    })

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
        setReachCount(reachCount+1);
    }

    return (
        <main style={{backgroundColor: "#59dc11", height: "100vh", width: "100vw"}}>
            <Countdown now={currentDate} end={toDate} reached={reached} reachCounter={reachCount} />
            {(reachCount % 2) !== 0 ? <Letters now={currentDate} end={toDate}/> : ""}

            <footer>Az oldal elkészültét támogatta a <a href="//hazizz.hu">Házizz</a>!</footer>
        </main>
    );
}

export default App;
