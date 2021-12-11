import React, { ChangeEvent, useState } from 'react'
import * as S from './styles'
import BackGround from '../../assets/imgaes/auth/background.svg'
import Logo from '../../assets/imgaes/logo_black.svg'
import InputBox from './inputbox'
import axios from 'axios'
import { BASE_URL } from '../../constant/api'
import { useNavigate } from 'react-router'
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
        name: ''
    })
    const { email, password, authNum, checkPassword, name } = authContent;
    const [type, setType] = useState('로그인')
    const onChangeAuthContent = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
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
            name: 'name',
            placeholder: '닉네임',
            eye: false,
            value: name
        },
        {
            name: 'email',
            placeholder: 'E-mail',
            eye: false,
            value: email
        },
        // {
        //     name: 'authNum',
        //     placeholder: '인증번호를 입력하세요',
        //     eye: false,
        //     value: authNum
        // },
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
        }
    ]
    const navigate = useNavigate()
    const onClickSubmit = (type: string) => {
        if (type === '회원가입') {
            axios.post(BASE_URL + '/register', {
                email,
                name,
                password
            }).then(() => {
                alert('회원가입을 성공하였습니다!')
            })
        } else if (type === '로그인') {
            axios.post(BASE_URL + '/login', {
                email,
                password
            }).then((res) => {
                alert('로그인을 성공하였습니다!')
                navigate('/calendar')
                localStorage.setItem('access_token', res.data.accessToken)
                localStorage.setItem('refresh_token', res.data.refreshToken)
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
            })
        }
    }
    return (
        <S.Wrapper>
            <S.BackgroundImg style={type === '로그인' ? { height: '100vh' } : { left: '175px' }} img={BackGround} />
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