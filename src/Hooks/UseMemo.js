import React, {useEffect, useMemo, useState} from 'react'

function ComplicatedFunction(number) {
  // Очень сложная функция, которая высчитывается примерно 2 секундны
  let i = 0;
  while (i < 1000000000) {
    i++
  }
  return number;

}


export const UseMemoComponent = () => {
  // UseMemo кеширует переменную и позволяет не пересоздавать ее при перерендеринге компонента
  // У нас есть 2 state - один со сложным и долгим вычислением, а второй быстрый.
  // Проблема, что быстрый стейт вызывает отработку сложной функции

  // Вторая причина для использования useMemo - кеширование объектов.
  // Допустим есть данные с сервера, или любой объект. В нашем примере style.
  // Он пересоздается каждый раз при render, поэтому его тоже можно закешировать. (если там ничего не меняется то можно использовать useRef)

  // useMemo, в отличие от useCallback работает с результатом функции, а не с самой функцией. Ему нельзя передать параметры. Он чего-то посчитал и это закешировал

  const [number, setNumber] = useState(42)

  // Это Middlware, он выстчиываеся каждый раз при рендере компонента.
  // С помощью useMemo мы говорим, что высчитывать эту функцию нужно только, если изменился параметр number
  // Иначе эта сложная функция будет высчитываться каждый раз, когда мы меняем не только число, но и цвет заголовка, а он к нему отношения не имеет
  const computed = useMemo(() => {
    return ComplicatedFunction(number)
  }, [number])

  // Во время изменения цвета, происходит перерендер компонента, и высчитывается функция ComplicatedFunction каждый раз.
  // Поэтому мы кешируем функцию ComplicatedFunction с помощью useMemo
  const [color, setColor] = useState(true)

  // Проблема описана выше, чтобы не пересоздавался объект при рендере мы его кешируем и говорим, что пересчитывать только при изменении color
  const style = useMemo(() => {
    return {color: color ? 'red' : 'green'}
  }, [color])

  useEffect(() => {
    // Если бы мы не кешировали style, то это бы отрабатывало при каждом рендере, потому что объект style бы пересоздавался
      console.log('style changed')
    }, [style])

  return (
    <>
      <h1 style={style}>Current number is: {number}</h1>
      <button className='waves-effect waves-light btn' style={{marginRight: '1rem'}} onClick={() => setNumber(number + 1)}>Add number</button>
      <button className='waves-effect waves-light btn' style={{marginRight: '1rem'}} onClick={() => setNumber(number - 1)}>Sub number</button>
      <button className='waves-effect waves-light btn' onClick={() => setColor(!color)}>Change color</button>
    </>
  )
}