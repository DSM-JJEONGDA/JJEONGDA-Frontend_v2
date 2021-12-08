import styled from "styled-components";

interface StyleProps {
    img?: string
    marginTop?: number
    border?: string
}

export const Wrapper = styled.div`
    max-width: 100vw;
    overflow: hidden;
    background-color: #EFE8DE;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const BackgroundImg = styled.div`
    width: 1360px;
    position: absolute;
    left: 140px;
    height: 958.61px;
    background-image: url(${(props: StyleProps) => props.img});
    background-repeat: no-repeat;
    background-position: center;
`
export const Logo = styled.img`
    position: absolute;
    top: -20px;
`
export const AuthSection = styled.section`
    margin-top: 340px;
    z-index: 100;
    margin-bottom: 240px;
`
export const Types = styled.section`
    display: flex;
`
export const Type = styled.div`
    background-color: #B1A18F;
    border: 1px solid #707070;
    width: 140px;
    height: 53px;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family: 'BM Kirang Haerang';
    line-height: 22px;
    color: #ffffff;
    align-items: center;
    justify-content: center;
`
export const HiddenBox = styled.div`
    width: 100%;
    height: 20px;
    background-color: #B1A18F;
    margin-top: ${(props: StyleProps) => props.marginTop || 0}px;
    border-left: ${(props: StyleProps) => props.border || '1px solid #707070'};
`

export const InputBox = styled.section`
    width: 607px;
    margin-top: -17.4px;
    border-radius: 10px;
    background-color: #B1A18F;
    border: 1px solid #707070;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
    background-color: #66635F;
    margin-top: 43px;
    width: 494px;
    height: 58px;
    border: none;
    border-radius: 29px;
    font-size: 17px;
    color: #ffffff;
    font-family: 'BM Kirang Haerang';
    margin-bottom: 43px;
`