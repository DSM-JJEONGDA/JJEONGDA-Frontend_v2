import axios from 'axios';
import React, { useEffect } from 'react';
import Calendar from '../../components/calendar';
import { BASE_URL } from '../../constant/api';
import * as S from './styles'
function CalendarPage() {
    useEffect(() => {
        axios.get(BASE_URL + '/list/1').then((res) => {
            console.log(res)
        })
    }, [])
    return (
        <S.Wrapper>
            <Calendar />
        </S.Wrapper>
    )
}
export default CalendarPage;