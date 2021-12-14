import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Line from '../../assets/imgaes/diary/line.svg'
import axios from 'axios';
import { BASE_URL } from '../../constant/api';
import { useLocation, useNavigate } from 'react-router'
import RemoveBtn from '../../assets/imgaes/diary/remove.svg'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Diary() {
    const query = useQuery();
    const year = query.get('year');
    const month = query.get('month');
    const day = query.get('day');
    const thisDay = `${year}-${month}-${day}`
    const [content, setContent] = useState({
        title: '',
        contents: '',
        weather: "good",
        date: thisDay,
        id: ''
    })
    const [already, setAlready] = useState(false)
    useEffect(() => {
        axios.get(BASE_URL + '/get/' + thisDay)
            .then((res) => {
                console.log(res.data)
                if (res.data[0] !== undefined) {
                    const { title, contents, date, id } = res.data[0]
                    setContent({
                        title: title,
                        contents: contents,
                        date: date,
                        weather: "good",
                        id: id
                    })
                    setAlready(true)
                }
            })
    }, [])
    const { title, contents, weather } = content;
    const onChangeContent = useCallback(e => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        })
    }, [content])
    const onClickSave = useCallback(() => {
        axios.post(BASE_URL + '/write', {
            title,
            contents,
            weather,
            date: content.date
        })
            .then(() => {
                alert('성공');
                navigate('/calendar')
            })
    }, [title, contents])
    const navigate = useNavigate()
    const onClickRemoveBtn = () => {
        axios.delete(BASE_URL + '/delete/' + content.id)
            .then(() => {
                navigate('/calendar')
            })
    }
    return (
        <S.Wrapper>
            <S.DiarySection>
                <S.Title>오늘의 하루</S.Title>
                <div style={{ display: 'flex' }}>
                    <S.TitleInput placeholder="제목을 입력하세요" onChange={onChangeContent} value={title} name="title" />
                    {already ?
                        <img onClick={onClickRemoveBtn} src={RemoveBtn} alt="" style={{ marginLeft: 'auto' }} />
                        : ''}
                </div>
                <S.ContentInput img={Line} placeholder={"오늘의 하루를 적어보세요!"} onChange={onChangeContent} value={contents} name="contents" />
                {already ?
                    <S.Exit onClick={() => navigate('/calendar')}>나가기</S.Exit> :
                    <S.SaveBtn onClick={onClickSave}>저장</S.SaveBtn>
                }
            </S.DiarySection>
        </S.Wrapper>
    )
}
export default Diary