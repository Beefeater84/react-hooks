import React, {useEffect, useState} from 'react'

export const UseEffectComponent = () => {


  const [type, setType] = useState('users')
  const [data, setData] = useState('users')

  const style = {
    color: 'darkblue'
  }

  useEffect(() => {
    // При каждой генерации компонента будет создаваться новый объект style и не важно что они одинаковые
    // useEffect следит за ссылкой на объект, а не за его содержимим.
    // Поскольку объект новый, каждый раз этот useEffect будет отрабатывать. Даже когда мы изменяем какой-то стейт, который к этому участку отношения не имеет
    // Чтобы улучшить производительность лучше использовать useMemo
    console.log('Style Generated')
  }, [style])


  useEffect(() => {
    // Вызывается каждый раз при рендере компонента
    //   console.log('ComponentDidMount')
  })

  useEffect(() => {
    // Их может быть сколько угодно
    // console.log('Second UseEffect')
  })

  useEffect(() => {
     // какое-то действие

    return {
      // Механизм сброса. фактически то что будет выполняться, когда компонент распадается - Unmounting
      // Можно сбросить все таймеры
    }

  })

  useEffect(() => {
    // Вызывается только когда изменяется type
    console.log('Depends on type')

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])


  return (
    <>
      <h1>Source: {type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todo</button>
      <button onClick={() => setType('posts')}>Posts</button>


      <pre>
        {JSON.stringify(data)}
      </pre>
    </>
  )
}