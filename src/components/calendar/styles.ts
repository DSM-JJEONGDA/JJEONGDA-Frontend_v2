import styled from "styled-components";

interface StyleProps {
    color?: string
}

export const Wrapper = styled.section`
    width: 100%;
    padding-top: 52px;
`
export const Logout = styled.div`
    display: flex;
    font-family: 'BM Kirang Haerang';
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    > p {
        margin-right: 13px;
    }
`
export const Month = styled.h1`
    font-size: 100px;
    font-family: 'BM Kirang Haerang';
    line-height: 110px;
    color: '#65625E';
    display: flex;
    justify-content: center;
`
export const Days = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 23px;
    `
export const Day = styled.p`
    font-size: 22px;
    font-family: 'BM Kirang Haerang';
    font-weight: 25px;
    margin: 0 37px;
    color: ${(props: StyleProps) => props.color || '#573A15'};
`
export const CalendarContent = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    padding-bottom: 50px;
    > div {
        width: 770px;
        flex-wrap: wrap;
        display: flex;
        height: 500px;
    }
`
export const EachBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: #EFE8DE;
    border-radius: 50%;
    border: 1px solid #707070;
    margin: 0 15px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'BM Kirang Haerang';
    font-size: 30px;
    line-height: 33px;
    color: #707070;
`
export const Arrow = styled.img`
    margin: 0 100px 0 100px;
`