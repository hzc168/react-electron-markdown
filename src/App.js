import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

// 自定义左侧容器
let LeftDiv = styled.div.attrs({
    className: 'col-3 left-panel'
})`
    background-color: #7b8c7c;
    min-height: 100vh;
    box-sizing: border-box;
`

// 自定义右侧容器
let RightDiv = styled.div.attrs({
    className: 'col-9 left-panel'
})`
    background-color: #c9d8cd;
    box-sizing: border-box;
`

function App() {
    return (
        <div className="App container-fluid px-0">
            <div className="row no-gutters">
                <LeftDiv>左侧</LeftDiv>
                <RightDiv>右侧</RightDiv>
            </div>
        </div>
    );
}
export default App;