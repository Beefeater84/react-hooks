import React, {useEffect, useRef, useState} from 'react'

export const UseRefComponent = () => {
  // useRef - сохраняет состояние при работе с компонентом, но не вызывает сам рендер
  // Он очень похож на useState, его можно использовать как state если мы его изменяем, но при этом компонент не перерендеривается

  let renderCount = useRef(1)
  // В input.current будет лежать ссылка на DOM input со всеми его свойствами
  const input = useRef(null)
  // Нужен, чтобы получать и как-то использовать предыдущие состояния
  const prevState = useRef(null)

  useEffect(() => {
    // нам нужно посчитать количество рендеров, но если мы используем state, то изменение state вызовет useEffect и он войдет в рекурсию, поэтому используем useRef
    renderCount.current++
  })

  // Нужен для примера,
  // чтобы state менялся в Input и происходили перерендеры, чтобы их посчитать
  // чтобы получить предыдущий стейт
  const [value, setValue] = useState('initial')

  useEffect(() => {
    // Эта конструкция вернет не текущий state, в предыдущий!
    prevState.current = value

  }, [value])


  // useRef часто используется чтобы задать фокус инпуту, использованием его стандартных методов
  const focus = () => input.current.focus()





  return (
    <>

      <input type="text" ref={input} onChange={e => setValue(e.target.value)} value={value}/>
      <button className='btn btn-default' onClick={focus} >Focus input</button>
      <p>Render count:  {renderCount.current}</p>
      <p>Prev state:  {prevState.current}</p>
    </>
  )
}