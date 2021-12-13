import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Calendar from '../../components/calendar';
import { BASE_URL } from '../../constant/api';
import { reducerType } from '../../modules/redux/reducer';
import * as S from './styles'
function CalendarPage() {
    const userId = useSelector((state: reducerType) => state.setuser.info.id)
    useEffect(() => {
        axios.get(BASE_URL + '/list/' + userId, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        }).then((res) => {
            console.log(res)
        })
    }, [userId])
    return (
        <S.Wrapper>
            <Calendar />
        </S.Wrapper>
    )
}
export default CalendarPage;