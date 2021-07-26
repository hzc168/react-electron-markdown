import React, { Fragment, useState } from 'react'

const SearchFile = ({title, onSearch}) => {
    const {searchActive, setSearchActive} = useState(false)
    const [value, setValue] = useState('')
    return (
        <Fragment>
            {
                !searchActive && 
                <>
                    <div>
                        <span>{title}</span>
                        <span>搜索</span>
                    </div>
                </>
            }
        </Fragment>
    )
}

export default SearchFile
