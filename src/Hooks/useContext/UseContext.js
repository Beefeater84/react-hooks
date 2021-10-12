import React, {useContext} from 'react';
import {AlertContext} from'./AlertContext/AlertContext'

export const Context = () => {

    // Принимаем функция показа/скрытия Alert
    const {onToggle} = useContext(AlertContext)

    return (
        <>
            <h1>Use Callback</h1>
            <button className={'btn'} onClick={onToggle}>Click this button to call Alert</button>
        </>
    )
}