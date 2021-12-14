import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ArrowLeft from '../../assets/imgaes/calendar/arrow_left.svg'
import ArrowRigth from '../../assets/imgaes/calendar/arrow_right.svg'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { reducerType } from '../../modules/redux/reducer'
import { BASE_URL } from '../../constant/api'
import { Link } from 'react-router-dom'
import Logout from '../../assets/imgaes/calendar/logout.svg'
import { useNavigate } from 'react-router'
import { setLogin } from '../../modules/redux/action/auth'
import { setUserInfo } from '../../modules/redux/action/user'
interface GetType {
    contents: string
    date: string
    title: string
    userId: number
    weather: string
}

function Calendar() {
    const Day: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', "FRI", "SAT"]
    const date = new Date()
    const day = date.getDate()
    const [month, setMonth] = useState(date.getMonth() + 1)
    const [year, setYear] = useState(date.getFullYear())
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`
    const firstDOTW = new Date(year, month - 1, 1).getDay()// 해당 달의 첫번째 요일
    const lastDay = new Date(year, month, 0).getDate();
    useEffect(() => {
        if (month > 12) {
            setMonth(1)
            setYear(year + 1)
        }
        if (month < 1) {
            setMonth(12)
            setYear(year - 1)
        }
    }, [month, year])
    const [list, setList] = useState<GetType[]>([])
    const [dateList, setDateList] = useState<string[]>([])
    const userId = useSelector((state: reducerType) => state.setuser.info.id)
    useEffect(() => {
        axios.get(BASE_URL + '/list/' + userId, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        }).then((res) => {
            setList(res.data)
        })
    }, [userId])
    useEffect(() => {
        const dateListArr = list.map(x => x.date)
        setDateList(dateListArr)
    }, [list])
    const navigate = useNavigate()
    const loginStatus = useSelector((state: reducerType) => state.setlogin.loginStatus);
    useEffect(() => {
        if (!loginStatus) {
            alert('로그인이 필요합니다!')
            navigate('/')
        }
    }, [loginStatus])
    const is6Week = firstDOTW + lastDay > 35 ? true : false;
    const dispatch = useDispatch()
    const onClickLogout = () => {
        localStorage.removeItem('access_token')
        dispatch(setLogin(false))
        setUserInfo({
            id: 0,
            email: '',
            name: '',
        })
        navigate('/')
    }
    return (
        <S.Wrapper>
            <S.Logout onClick={onClickLogout}>
                <p>로그아웃</p>
                <img src={Logout} alt="" />
            </S.Logout>
            <S.Month>{month}</S.Month>
            <S.Days>
                {Day.map((item: string, index: number) => (
                    <S.Day color={index === 0 ? '#AF1B1B' : index === 6 ? '#3243BF' : ''}>{item}</S.Day>
                ))}
            </S.Days>
            <S.CalendarContent>
                <S.Arrow style={is6Week ? { marginBottom: '100px' } : {}} src={ArrowLeft} onClick={() => setMonth(month - 1)} />
                <div style={is6Week ? { height: '600px' } : {}}>
                    {Array(firstDOTW).fill(void 0).map((item, index) => (
                        <S.EachBox style={{ border: 'none' }} />
                    ))}
                    {Array(lastDay).fill(void 0).map((item, index) => {
                        const thisDay = `${year}-${month}-${index + 1}`
                        const isFill = dateList.includes(thisDay)
                        return <Link to={`/diary?year=${year}&month=${month}&day=${index + 1}`}><S.EachBox style={today === thisDay ? { color: '#ffffff', backgroundColor: '#707070' } : isFill ? { backgroundColor: '#C9AC82', color: '#ffffff' } : {}} > {index + 1}</S.EachBox></Link>
                    })}
                </div>
                <S.Arrow style={is6Week ? { marginBottom: '100px' } : {}} src={ArrowRigth} onClick={() => setMonth(month + 1)} />
            </S.CalendarContent>
        </S.Wrapper >
    )
}
export default Calendar