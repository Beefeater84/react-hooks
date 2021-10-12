import React, {useCallback, useState} from 'react'
import {ListItems} from "../Components/ListItems";

export const UseCallbackComponent = (callback, deps) => {

  /*
   В данном компоненте есть 2 функции:
    1) Смена цвета у заголовка
    2) Поучение элементов из базы данных

    Функция получения элементов из базы данных передается как ссылка в список и там вызывается и заполняется.
    Проблема в том, что при изменении заголовка весь компонент перерендеривается и снова происходит запрос в базу данных. Этого можно избежать использованием useCallback
    useCallback - кеширует функцию и вызывает ее только при изменении зависимостей.

    Отличия от useMemo:
    в useMemo мы работаем с результатом функции
    в useCallback с самой функцией, мы можем передавать внутрь параметры.


   */

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)
  const styles = {
    color: colored ? 'red' : 'darkblue'
  }


  const getListItems = useCallback((indexNumber) => {
    return new Array(count).fill(' ').map((_, i) => `Element ${i + indexNumber}`);
  }, [count])

  return (
    <>
      <h1 style={styles}>Use Callback</h1>
      <button className='btn btn-default' onClick={() => setColored(!colored)} >Change h1 color</button>
      <button className='btn btn-default' onClick={() => setCount(count + 1)} >Add list element</button>
      <ul>
        <ListItems getItems={getListItems} />
      </ul>
    </>
  )
}