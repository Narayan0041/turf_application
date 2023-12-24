import React, { useEffect, useState } from 'react';
import NavbarPagesContainer from '../../common/Navbar';
import SlotDateCard from '../../component/SlotPage/SlotDateCard';

export default function SlotPage() {
    const [weekSchedule, setWeekSchedule] = useState([]);

    useEffect(() => {
        const generateWeekSchedule = () => {
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            const schedule = [];
            const today = new Date().getDate(); 
            for (let i = 0; i < 7; i++) {
                const currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + i);

                const dayInMonFormat = daysOfWeek[currentDate.getDay()];
                const dayWithLeadingZero = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
                const monthInAbbreviation = months[currentDate.getMonth()];

                const formattedDate = `${dayWithLeadingZero}`;
                const isActive = currentDate.getDate() === today;

                const scheduleItem = {
                    date: formattedDate,
                    day: dayInMonFormat,
                    month: monthInAbbreviation,
                    active: isActive,
                };
                schedule.push(scheduleItem);
            }
            return schedule;
        };

        const weekSchedule = generateWeekSchedule();
        setWeekSchedule(weekSchedule);
    }, []);

    return (
        <div className='SlotPage'>
            <NavbarPagesContainer />
            <div className='seprationsss'>
                {weekSchedule.map((slot, index) => (
                    <SlotDateCard
                        key={index}
                        date={slot.date}
                        day={slot.day}
                        month={slot.month}
                        className={slot.active ? 'active' : ''} // Apply 'active' class conditionally
                    />
                ))}
            </div>
        </div>
    );
}
