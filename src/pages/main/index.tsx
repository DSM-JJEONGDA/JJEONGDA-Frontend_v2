import React from "react"
import * as S from './styles'
import Logo from '../../assets/imgaes/logo.svg'
import BackGround from '../../assets/imgaes/landing/background.svg'
import Developer from '../../assets/imgaes/landing/foooterbackground.svg'
import Developers from '../../assets/imgaes/landing/developers.svg'
import { useNavigate } from "react-router"
function Main() {
    const navigate = useNavigate()
    return (
        <S.LandingWrapper>
            <S.LandingTop>
                <div>
                    <i><img src={Logo} alt="" /></i>
                    <p>정윤이의 다이어리</p>
                </div>
                <S.Line />
            </S.LandingTop>
            <S.LaindingMain img={BackGround}>
                <S.LoginBox>
                    <p>더 많은 서비스를 이용하시려면 로그인이 필요합니다</p>
                    <S.LoginBtn onClick={() => navigate('/auth')}>로그인 / 회원가입 바로가기</S.LoginBtn>
                </S.LoginBox>
            </S.LaindingMain>
            <S.LaindingBottom img={Developer}>
                <S.DeveloperImg img={Developers}>
                    <S.Names>
                        <S.DeveloperNameBox style={{ marginLeft: '-50px' }}>
                            <S.Position>Front - end</S.Position>
                            <S.Name>강석현</S.Name>
                        </S.DeveloperNameBox>
                        <S.DeveloperNameBox style={{ marginRight: '50px' }}>
                            <S.Position>Back - end</S.Position>
                            <S.Name>이정윤</S.Name>
                        </S.DeveloperNameBox>
                        <S.DeveloperNameBox>
                            <S.Position>Design</S.Position>
                            <S.Name>이예빈</S.Name>
                        </S.DeveloperNameBox>
                    </S.Names>
                </S.DeveloperImg>
            </S.LaindingBottom>
        </S.LandingWrapper>
    )
}
export default Main