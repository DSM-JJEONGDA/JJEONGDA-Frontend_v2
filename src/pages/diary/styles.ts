import styled from "styled-components";

interface StyleProps {
    img: string;
}

export const Wrapper = styled.section`
    width: 100%;
    background-color: #EFE8DE;
    overflow: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
`
export const DiarySection = styled.div`
    /* margin: 48px 0 0 140.5px; */
    margin-top: 48px;
    width: 1000px;
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-family: 'BM Kirang Haerang';
    font-size: 45px;
    line-height: 50px;
    color: #65625E;
`
export const TitleInput = styled.input`
    width: 175px;
    margin-top: 33px;
    height: 40px;
    font-family: 'BM Kirang Haerang';
    background-color: transparent;
    font-size: 28px;
    line-height: 180px;
    border: none;
    color: #65625E;
    outline: none;
    border-bottom: 1px solid #707070;
`
export const ContentInput = styled.textarea`
    width: 100%;
    height: 480px;
    margin-top: 15px;
    background-color: transparent;
    resize: none;
    outline: none;
    font-family: 'BM Kirang Haerang';
    color: #65625E;
    border: none;
    background-image: url(${(props: StyleProps) => props.img});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    font-size: 20px;
    line-height: 40px;
`

export const SaveBtn = styled.button`
    width: 70px;
    height: 30px;
    background-color: #65625E;
    border: 1px solid #707070;
    border-radius: 100px;
    font-size: 14px;
    font-family: 'BM Kirang Haerang';
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0 0 auto;
`