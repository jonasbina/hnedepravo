import { parse, format, addDays, eachDayOfInterval, isTuesday, isFriday } from 'date-fns';
import React, {useState} from "react";
import quotesData from "../public/quotes.json";
import {Navbar} from "../components/navbar";

type Weekday = 'Tuesday' | 'Friday';

interface Holiday {
    name: string;
    date: string;
}

interface Break {
    name: string;
    start: string;
    end: string;
}

// Czech holidays
const holidays: Holiday[] = [
    { name: 'Den obnovy samostatného českého státu', date: '2024-01-01' },
    { name: 'Den vítězství', date: '2024-05-08' },
    { name: 'Den slovanských věrozvěstů Cyrila a Metoděje', date: '2024-07-05' },
    { name: 'Den upálení mistra Jana Husa', date: '2024-07-06' },
    { name: 'Den české státnosti', date: '2024-09-28' },
    { name: 'Den vzniku samostatného československého státu', date: '2024-10-28' },
    { name: 'Den boje za svobodu a demokracii', date: '2024-11-17' },
    { name: 'Nový rok', date: '2024-01-01' },
    { name: 'Svátek práce', date: '2024-05-01' },
    { name: 'Štědrý den', date: '2024-12-24' },
    { name: '1. svátek vánoční', date: '2024-12-25' },
    { name: '2. svátek vánoční', date: '2024-12-26' },
];

const breaks: Break[] = [
    { name: 'Podzimní prázdniny', start: '2024-10-29', end: '2024-10-30' },
    // Easter break dates vary, so these are placeholders and should be dynamically calculated
    { name: 'Velikonoční prázdniny', start: '2024-04-17', end: '2024-04-21' },
    { name: 'Jarní prázdniny', start: '2024-03-03', end: '2024-03-09' },
    { name: 'Vánoční prázdniny', start: '2024-12-23', end: '2025-01-02' },
];

function getNonFreeDays(schoolYear: string, day1: Weekday, day2: Weekday): Date[] {
    const [startYear, endYear] = schoolYear.split('/').map(y => parseInt(y));
    const startDate = new Date(`20${startYear}-09-01`);
    const endDate = new Date(`20${endYear}-06-30`);

    const allDates = eachDayOfInterval({ start: startDate, end: endDate });

    const weekdaysFilter = (date: Date) => (isTuesday(date) && day1 === 'Tuesday' || day2 === 'Tuesday') ||
        (isFriday(date) && day1 === 'Friday' || day2 === 'Friday');
    const specificWeekdays = allDates.filter(weekdaysFilter);

    const holidaysSet = new Set(holidays.map(holiday => holiday.date));
    const breaksSet = new Set();

    breaks.forEach(brk => {
        const breakStart = parse(brk.start, 'yyyy-MM-dd', new Date());
        const breakEnd = parse(brk.end, 'yyyy-MM-dd', new Date());
        const breakDates = eachDayOfInterval({ start: breakStart, end: breakEnd });
        breakDates.forEach(date => breaksSet.add(format(date, 'yyyy-MM-dd')));
    });

    const nonFreeDays = specificWeekdays.filter(date => {
        const dateString = format(date, 'yyyy-MM-dd');
        return !holidaysSet.has(dateString) && !breaksSet.has(dateString);
    });

    return nonFreeDays;
}
const StefanCvici = () => {
    const schoolYear = "24/25";
    const nonFreeDays = getNonFreeDays(schoolYear, "Tuesday", "Friday");
    const formatedNonFreeDays = nonFreeDays.map(date => format(date, 'yyyy-MM-dd'))
    const nonFreeDaysCount = nonFreeDays.length
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4 text-blue-600">Štefan cvičí</h1>
                <a>Příší rok by mělo být ${nonFreeDaysCount} tělocviků</a>
                <a>Cuming soon</a>
            </div>
        </div>
    );
};

export default StefanCvici;
