import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ArrowLeft from '../../assets/imgaes/calendar/arrow_left.svg'
import ArrowRigth from '../../assets/imgaes/calendar/arrow_right.svg'

function Calendar() {
    const Day: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', "FRI", "SAT"]
    const date = new Date()
    const day = date.getDate()
    const [month, setMonth] = useState(date.getMonth() + 1)
    const [year, setYear] = useState(date.getFullYear())
    const dotw = date.getDay()
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`
    const [firstDOTW, setFirstDOTW] = useState(new Date(year, month - 1, 1).getDay())// 해당 달의 첫번째 요일
    const lastDay = new Date(year, month, 0).getDate();
    useEffect(() => {
        if (month > 12) {
            setMonth(1)
        }
    }, [month])
    return (
        <S.Wrapper>
            <S.Month>{month}</S.Month>
            <S.Days>
                {Day.map((item: string, index: number) => (
                    <S.Day color={index === 0 ? '#AF1B1B' : index === 6 ? '#3243BF' : ''}>{item}</S.Day>
                ))}
            </S.Days>
            <S.CalendarContent>
                <S.Arrow src={ArrowLeft} onClick={() => setMonth(month - 1)} />
                <div>
                    {Array(lastDay).fill(void 0).map((item, index) => (
                        <S.EachBox style={today === `${year}-${month}-${index + 1}` ? { color: '#ffffff', backgroundColor: '#707070' } : {}} > {index + 1}</S.EachBox>
                    ))}
                </div>
                <S.Arrow src={ArrowRigth} onClick={() => setMonth(month + 1)} />
            </S.CalendarContent>
        </S.Wrapper >
    )
}
export default Calendar