import React, {useEffect} from 'react';
import moment from "moment";

interface Props {
    now: moment.Moment,
    end: moment.Moment,
    reached: () => void,
    reachCounter: number
}

const Countdown = (props: Props) => {
    const timeBetween: moment.Duration = moment.duration(props.end.diff(props.now));
    const isRowBreakNeeded = timeBetween.years() || timeBetween.months() || timeBetween.weeks() || timeBetween.days();

    let outputTime = <span>
        {(props.reachCounter % 2) === 0 ? <span>A tanév kezdetéig: <br/></span> : <span>A tanév végéig: <br/></span>}
        {timeBetween.years() > 0 ? timeBetween.years() + " év, " : ""}
        {timeBetween.months() > 0 ? timeBetween.months() + " hónap, " : ""}
        {timeBetween.weeks() > 0 ? timeBetween.weeks() + " hét, " : ""}
        {timeBetween.days() % 7 > 0 ? (timeBetween.days() % 7) + " nap " : ""}
        {isRowBreakNeeded ? <br/> : ""}
        <span className="numbers">
            {timeBetween.hours() > 0 ? timeBetween.hours() + ":" : ""}
            {timeBetween.minutes() < 10 ? "0" + timeBetween.minutes() + ":" : timeBetween.minutes() + ":"}
            {timeBetween.seconds() < 10 ? "0" + timeBetween.seconds().toString() : timeBetween.seconds().toString()}
        </span>
    </span>;

    useEffect(() => {
        if (timeBetween.seconds() < 0 ||
            timeBetween.minutes() < 0 ||
            timeBetween.hours() < 0 ||
            timeBetween.days() < 0 ||
            timeBetween.weeks() < 0 ||
            timeBetween.months() < 0 ||
            timeBetween.years() < 0) {
            props.reached();
        }
    })

    return (
        <div className="countDown">
            {outputTime}
        </div>
    );
};

export default Countdown;