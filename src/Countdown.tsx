import React from 'react';
import moment from "moment";

interface Props {
    now: moment.Moment,
    end: moment.Moment
}

const Countdown = (props: Props) => {
    const timeBetween: moment.Duration = moment.duration(props.end.diff(props.now))

    return (
        <div>
            {timeBetween.days()} nap, {timeBetween.hours()} óra, {timeBetween.minutes()} perc, {timeBetween.seconds()} másodperc
        </div>
    );
};

export default Countdown;