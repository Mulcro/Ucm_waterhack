import React from 'react'
import { useState, useEffect } from 'react';


export default function Comp() {
//Input
const [dayInput, setDayInput] = useState('');
const [monthInput, setMonthInput] = useState('');
const [yearInput, setYearInput] = useState('');

//Date arrays
const [days,setDays] = useState([]);
const [months] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
const [years,setYears] = useState([]);


const [csvData, setCsvData] = useState();
const [showData, setShowData] = useState(false);
    
//Populate the year array for the selector
    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setCsvData(data);
        })

        for(let i = 0; i <= 31; i++){
            setDays(prevDays => {
                return[...prevDays, i]
            })
        }

        for(let i = 2030; i < 2061; i++){
            setYears(prevYears => {
                return[...prevYears, i]
            })
        }
    }, [])

    useEffect(() => {
        console.log(yearInput);
    }, [yearInput])

    const handleSelectDay = e => {
        setDayInput(e.target.value);
    }
    const handleSelectMonth = e => {
        setMonthInput(e.target.value);
    }
    const handleSelectYear = e => {
        const year = parseInt(e.target.value);
        const newYear = year - 2000;
    
        const yearToBeSubmitted = newYear.toString();
        setYearInput(yearToBeSubmitted);

    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(dayInput, monthInput, yearInput);

        fetch("https://bear-creak-watcher-7ad6876173e7.herokuapp.com/getData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day: dayInput,
                month: monthInput,
                year: yearInput
            })
        })
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            setCsvData(data);
            setShowData(true);
        })
    }

    return ( 
        <div className="rainComp">
            <h2>Percipitation Analyzer</h2>
            <p id='rcs'>Enter a date and recieve a prediction on the percipitation and stage height data of bear creek at that date aswell as the flood risk</p>
            <form action="" onSubmit={e => handleSubmit(e)}>
            <select onChange={e => handleSelectDay(e)} name="day" id="yearSelector">
                <option value={0}>Select day</option>
                {days.map(day => {
                    return <option value={day}>{day}</option>
                })}
            </select>
            <select onChange={e => handleSelectMonth(e)} name="year" id="yearSelector">
                <option value={0}>Select month</option>
                {months.map(month => {
                    return <option value={month}>{month}</option>
                })}
            </select>
            <select onChange={e => handleSelectYear(e)} name="year" id="yearSelector">
                <option value={0}>Select year</option>
                {years.map(year => {
                    return <option value={year}>{year}</option>
                })}
            </select>
            <input type="submit" />
            </form>

            {csvData && 
                <div id="csvDataSection">
                    {showData &&
                        <div className='three'>
                            <p>Date: {csvData.date}</p>
                                <p>Predicted precipitation: {csvData.avg_pr}</p>
                                <p>Predicted Stage height: {csvData.stage_height}</p>
                                <p>Flood risk: {!csvData.risk ? "There is a low probability of floods on this date" : "There is a high probability of floods on this date"}</p>
                        </div>
                    }

                </div>
            }

        </div>
     );
}
