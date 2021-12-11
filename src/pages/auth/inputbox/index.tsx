import React, { ChangeEvent, useState } from 'react'
import * as S from './styles'
import Visible from '../../../assets/imgaes/auth/visible.svg'
import InVisible from '../../../assets/imgaes/auth/invisible.svg'
interface PropsType {
    item: {
        name: string
        placeholder: string
        eye: boolean
        value: string
    }
    index: number
    onChangeAuthContent: (e: ChangeEvent<HTMLInputElement>) => void
}
function InputBox({ item, index, onChangeAuthContent }: PropsType) {
    const [visible, setVisible] = useState(!item.eye)
    const onClickSetVisible = () => {
        setVisible(!visible)
    }
    return (
        <S.InputLabel style={{ marginTop: index === 0 ? '43px' : '18px' }}>
            <S.Input placeholder={item.placeholder} type={visible ? 'text' : 'password'} name={item.name} onChange={onChangeAuthContent} value={item.value} />
            {item.eye ?
                <img src={visible ? Visible : InVisible} style={visible ? { width: '25px' } : { width: '30px' }} alt="" onClick={onClickSetVisible} />
                : ''}
        </S.InputLabel>
    )
}
export default InputBox