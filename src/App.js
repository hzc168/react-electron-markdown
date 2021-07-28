import React, { useState } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchFile from './components/SearchFile'
import initFiles from './utils/initFiles'
import FileList from './components/FileList'
import ButtonItem from './components/ButtomItem'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import TabList from './components/TabList'
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css"

// 自定义左侧容器
let LeftDiv = styled.div.attrs({
    className: 'col-3 left-panel'
})`
    position: relative;
    background-color: #7b8c7c;
    min-height: 100vh;
    box-sizing: border-box;
    .btn_list {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        p {
            border: 0;
            width: 50%;
            color: #fff;
            border-radius: 0;
            margin-bottom: 0 !important;
        }
        p:nth-of-type(1){
            background-color: #8ba39e;
        }
        p:nth-of-type(2){
            background-color: #98b43a;
        }
    }
`

// 自定义右侧容器
let RightDiv = styled.div.attrs({
    className: 'col-9 left-panel'
})`
    background-color: #c9d8cd;
    box-sizing: border-box;
    .init-page {
        color: #888;
        text-align: center;
        font: normal 28px/300px '微软雅黑'
    }
`

function App() {

    const [files, setFiles] = useState(initFiles)   // 代表所有的文件信息
    const [activeId, setActiveId] = useState('')    // 当前正在编辑的文件id
    const [openIds, setOpenIds] = useState([])      // 当前已打开的所有文件信息 ids
    const [unSaveIds, setUnSaveIds] = useState([])      // 当前未被保存的所有文件信息 ids

    // 计算已打开的所有文件信息
    const openFiles = openIds.map(openId => {
        return files.find(file => file.id === openId)
    })

    // 计算正在编辑的文件信息
    const activeFile = files.find(file => file.id === activeId)

    return (
        <div className="App container-fluid px-0">
            <div className="row no-gutters">
                <LeftDiv>
                    <SearchFile
                        title="我的文档"
                        onSearch={(value) => { console.log(value) }}
                    ></SearchFile>
                    <FileList files={files}
                        editFile={(id) => console.log(id)}
                        deleteFile={(id) => console.log("删除：", id)}
                        saveFile={(id, value) => console.log(id, value)}
                    ></FileList>

                    <div className="btn_list">
                        <ButtonItem title={'新建'} icon={faPlus} />
                        <ButtonItem title={'导入'} icon={faFileImport} />
                    </div>

                </LeftDiv>
                <RightDiv>
                    {
                        activeFile &&
                        <>
                            <TabList
                                files={openFiles}
                                activeItem={activeId}
                                unSaveItems={unSaveIds}
                                clickItem={(id) => { console.log(id) }}
                                closeItem={(id) => { console.log(id) }}
                            ></TabList>
                            <SimpleMDE
                                id="your-custom-id"
                                onChange={(value) => { console.log(value) }}
                                value={activeFile.body}
                                options={{
                                    autofocus: true,
                                    spellChecker: false,
                                    minHeight: "445px"
                                }}
                            >
                            </SimpleMDE>
                        </>
                    }
                    {
                        !activeFile &&
                        <div className="init-page">新建或导入文件</div>
                    }
                    
                </RightDiv>
            </div>
        </div>
    );
}
export default App;