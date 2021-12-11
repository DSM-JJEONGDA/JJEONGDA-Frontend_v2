import styled from "styled-components";

export const InputLabel = styled.label`
    width: 494px;
    height: 58px;
    border: 1px solid #ffffff;
    border-radius: 29px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    > img {
        width: 30px;
        height: 20px;
        margin-right: 20px;
    }
    > input[type=password]{
        font-family: 'notosans kr';
        ::placeholder{
            font-family: 'BM Kirang Haerang';
        }
    }
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 29px;
    padding-left: 40px;
    font-family: 'BM Kirang Haerang';
    font-size: 17px;
    line-height: 19px;
    color: rgba(0,0,0,0.6);
`