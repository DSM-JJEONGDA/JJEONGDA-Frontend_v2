import styled from "styled-components";

interface StyleProps {
    img?: string;
}

export const LandingWrapper = styled.section`
    /* width: 1280px; */
    margin: 0 auto;
    max-width: 1440px;
    overflow: hidden;
    `
export const LandingTop = styled.section`
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    height: 400px;
    position: relative;
    > div {
        display: flex;
        flex-direction: column;
        > i {
            position: absolute;
            top: -75px;
            left: -81px;
        }
        > p {
            font-family: 'BM Kirang Haerang';
            font-size: 40px;
            line-height: 44px;
            color: #ffffff;
            position: absolute;
            bottom: 135px;
            left: 66px;
        }
    }
`
export const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid #ffffff;
    position: absolute;
    bottom: 60px;
`
export const LaindingMain = styled.section`
    background-image: url(${(props: StyleProps) => props.img});
    width: 100%;
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
    /* position: absolute; */
`
export const LoginBox = styled.div`
    width: 350px;
    height: 250px;
    margin: 85px 65px 0 auto;
    background-color: #ffffff;
    border: 1px solid #707070;
    border-radius: 10px;
    > p {
        margin: 50px auto 0 auto;
        font-family: 'BM Kirang Haerang';
        font-size: 23px;
        line-height: 25px;
        color: #707070;
        width: 222px;
        text-align: center;
    }
`
export const LoginBtn = styled.div`
    width: 303px;
    height: 88px;
    background-color: #B1A18F;
    border: 1px solid #707070;
    color: #ffffff;
    margin: 47px auto 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: 'BM Kirang Haerang';
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
`

export const LaindingBottom = styled.section`
    background-image: url(${(props: StyleProps) => props.img});
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const DeveloperImg = styled.div`
    position: relative;
    background-image: url(${(props: StyleProps) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 101.4%;
    height: 400px;
    margin-left: -10px;
`
export const Names = styled.div`
    width: 1150px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`
export const DeveloperNameBox = styled.div`
    font-family: 'BM Kirang Haerang';
    color: #ffffff;
`
export const Position = styled.p`
    font-size: 50px;
    line-height: 55px;
`
export const Name = styled.p`
    font-size: 35px;
    line-height: 39px;
    margin-top: 15px;
`