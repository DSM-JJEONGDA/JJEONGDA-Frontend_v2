import React, { useCallback, useState } from 'react'
import * as S from './styles'
import Line from '../../assets/imgaes/diary/line.svg'
import axios from 'axios';
import { BASE_URL } from '../../constant/api';
import { useLocation } from 'react-router'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Diary() {
    const [content, setContent] = useState({
        title: '',
        contents: ''
    })
    const { title, contents } = content;
    const onChangeContent = useCallback(e => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        })
    }, [content])
    const onClickSave = useCallback(() => {
        axios.post(BASE_URL + '/write', {
            title,
            contents
        })
    }, [title, contents])
    const query = useQuery();
    const year = query.get('year');
    const month = query.get('month');
    const day = query.get('day');
    console.log(year, '-', month, '-', day)
    return (
        <S.Wrapper>
            <S.DiarySection>
                <S.Title>오늘의 하루</S.Title>
                <S.TitleInput placeholder="제목을 입력하세요" onChange={onChangeContent} value={title} name="title" />
                <S.ContentInput img={Line} placeholder={"오늘의 하루를 적어보세요!"} onChange={onChangeContent} value={contents} name="contents" />
                <S.SaveBtn onClick={onClickSave}>저장</S.SaveBtn>
            </S.DiarySection>
        </S.Wrapper>
    )
}
export default Diary