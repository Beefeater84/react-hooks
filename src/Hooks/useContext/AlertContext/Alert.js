import React, {useContext, useState} from 'react'
import {AlertContext} from "./AlertContext";

export const Alert = () => {

    // Импортирует значение из state из Alert - видимый он или неи
    const {visible} = useContext(AlertContext)

    // Если !visible то не отрисовываем наш Alert
    if(!visible) return null

    return (
        <div className={'alert'}>Alert! It's your alert</div>
    )
}