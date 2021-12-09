import React from 'react'
import * as S from './styles'
import Line from '../../assets/imgaes/diary/line.svg'

function Diary() {
    return (
        <S.Wrapper>
            <S.DiarySection>
                <S.Title>오늘의 하루</S.Title>
                <S.TitleInput placeholder="제목을 입력하세요" />
                <S.ContentInput img={Line} placeholder={"오늘의 하루를 적어보세요!"} />
                <S.SaveBtn>저장</S.SaveBtn>
            </S.DiarySection>
        </S.Wrapper>
    )
}
export default Diary