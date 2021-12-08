import React from 'react'
import * as S from './styles'

interface PropsType {
    item: {
        name: string
        placeholder: string
        eye: boolean
    }
    index: number
    onChangeAuthContent: () => void
}
function InputBox({ item, index, onChangeAuthContent }: PropsType) {
    return (
        <S.InputLabel style={{ marginTop: index === 0 ? '43px' : '18px' }}>
            <S.Input placeholder={item.placeholder} />
        </S.InputLabel>
    )
}
export default InputBox