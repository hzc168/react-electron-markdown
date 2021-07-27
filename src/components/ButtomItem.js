import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 自定义P标签模拟按钮操作
const BtnP = styled.p.attrs({
    className: 'btn no-border'
})``

const ButtomItem = ({ title, btnClick, icon }) => {
    return (
        <BtnP btnClick={() => {}}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <span className="ml-2">{title}</span>
        </BtnP>
    )
}

export default ButtomItem