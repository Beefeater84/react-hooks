import React, {useEffect, useState} from 'react'

export const ListItems = ({getItems}) => {

  const [items, setItems] = useState([])


  useEffect(() => {
    // Правильный подход к заполнению элементов из базы данных. По умолчанию пустой массив и после получения запроса - заполняем
    // Тут бы еще async/await добавить при запросе в базу
    console.log('render')

    const newItems = getItems(42);
    setItems(newItems)
  }, [getItems])

   return (
    <>
      {
        items.map(
          (el, i) => {
            return <li key={i}>{el}</li>
          }
        )
      }
    </>
  )
}