import React, {useState} from 'react';


// Чтобы его можно было импортировать там где мы будем использовать переменные - экспортируем здесь
export const AlertContext = React.createContext()


// По идее мы должны на каждое действие создавать свой Provider и оборачивать им все в компоненте App
// Чтобы этого избежать, а также чтобы не писать всю эту логику в компоненте App мы используем логику описанную в этом файле (примерно такая же архитектура используется в Angular)
export const AlertProvider = ({children}) => {

    const [isShown, setIsShown] = useState(false)

    const onToggle = () => {setIsShown(prev => !prev)}

    const alert = {
        visible: isShown,
        onToggle

    }

    return (
        <AlertContext.Provider value={alert}>
            { children }
        </AlertContext.Provider>
    )
}