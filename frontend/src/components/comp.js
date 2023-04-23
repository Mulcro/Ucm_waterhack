import React from 'react'
import { useState, useEffect } from 'react';


export default function Comp() {
const [years,setYears] = useState([]);
const [yearInput, setInput] = useState(0);
const [csvData, setCsvData] = useState([]);
    
//Populate the year array for the selector
    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setCsvData(data);
        })

        for(let i = 2030; i < 2061; i++){
            setYears(prevYears => {
                return[...prevYears, i]
            })
        }
    }, [])

    useEffect(() => {
        console.log(yearInput);
    }, [yearInput])

    const handleSelectYear = e => {
        setInput(e.target.value);
    }

    return ( 
        <div className="rainComp">
            <select onChange={e => handleSelectYear(e)} name="year" id="yearSelector">
                <option value={0}>Select year</option>
                {years.map(year => {
                    return <option value={year}>{year}</option>
                })}
            </select>
        </div>
     );
}
