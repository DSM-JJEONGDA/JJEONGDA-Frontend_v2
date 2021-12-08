import React, { ChangeEvent, useState } from 'react'
import * as S from './styles'
import BackGround from '../../assets/imgaes/auth/background.svg'
import Logo from '../../assets/imgaes/logo_black.svg'
import InputBox from './inputbox'
// import AuthType from '../../assets/imgaes/auth/authtype.svg'
interface LoginType {
    name: string
    placeholder: string
    eye: boolean
    value: string
}
interface SignupType {
    name: string
    placeholder: string
    eye: boolean,
    value: string
}
function Auth() {
    const [authContent, setAuthContent] = useState({
        email: '',
        password: '',
        authNum: '',
        checkPassword: '',
        nickName: ''
    })
    const { email, password, authNum, checkPassword, nickName } = authContent;
    const [type, setType] = useState('로그인')
    const onChangeAuthContent = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthContent({
            ...authContent,
            [e.target.name]: e.target.value
        })
    }
    const Loginarray: LoginType[] = [{
        name: 'email',
        placeholder: 'E-mail',
        eye: false,
        value: email
    }, {
        name: 'password',
        placeholder: 'PassWord',
        eye: true,
        value: password
    }]
    const SignupArray: SignupType[] = [
        {
            name: 'E-mail',
            placeholder: 'E-mail',
            eye: false,
            value: email
        },
        {
            name: 'authNum',
            placeholder: '인증번호를 입력하세요',
            eye: false,
            value: authNum
        },
        {
            name: 'password',
            placeholder: 'PassWord',
            eye: true,
            value: password
        },
        {
            name: 'checkPassword',
            placeholder: 'PassWord 확인',
            eye: true,
            value: checkPassword
        },
        {
            name: 'nickName',
            placeholder: '닉네임',
            eye: false,
            value: nickName
        }
    ]
    const onClickSubmit = (type: string) => {
        if (type === '로그인') {

        }
    }
    return (
        <S.Wrapper>
            <S.BackgroundImg img={BackGround} />
            <S.Logo src={Logo} />
            <S.AuthSection>
                <S.Types>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <S.Type onClick={() => setType('로그인')}>
                            로그인
                        </S.Type>
                        {type === '로그인' ?
                            <S.HiddenBox marginTop={-2} />
                            : <S.HiddenBox border={'1px solid translate'} />}
                    </div>
                    <div>
                        <S.Type onClick={() => setType('회원가입')}>
                            회원가입
                        </S.Type>
                        {type === '회원가입' ?
                            <S.HiddenBox marginTop={-5} border={'1px solid translate'} />
                            : <S.HiddenBox marginTop={0} border={'1px solid translate'} />}
                    </div>
                </S.Types>
                <S.InputBox>
                    {type === '로그인' ?
                        Loginarray.map((item: LoginType, index: number) => (
                            <InputBox item={item} index={index} onChangeAuthContent={onChangeAuthContent} />
                        ))
                        :
                        SignupArray.map((item: SignupType, index: number) => (
                            <InputBox item={item} index={index} onChangeAuthContent={onChangeAuthContent} />
                        ))
                    }
                    <S.Button onClick={() => onClickSubmit(type)}>{type}</S.Button>
                </S.InputBox>
            </S.AuthSection>
        </S.Wrapper>
    )
}
export default Auth;