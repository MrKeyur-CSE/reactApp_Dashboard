import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Calander() {
    const [date, setDate] = useState(new Date());

    const onChnage = date => {
        setDate(date);
    };

    return (
        <div>
            <center>
                <h1>Calander Page</h1>
                <br></br>
                <br></br>
                <Calendar onCharge={onChnage} value={date} />
                <div className="md-3">
                    <br></br>
                    <br></br>
                    {date.toString()}
                </div>
            </center>
        </div>
    )
}

export default Calander
