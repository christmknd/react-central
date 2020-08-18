import React from 'react';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheets/calendar.css';



    function Calendar (){

        const [selectedDate, setSelectedDate] = useState(null);

        return(
        
            <div className ="DatePicker">
                <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText={'dd/mm/yyyy'}
                // minDate={new Date()}
                // maxDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                showYearDropdown
                scrollableYearDropdown/>
            </div>
        )
    }


    

export default Calendar;