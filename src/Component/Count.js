import React, { useState, useEffect } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)
  const [example, setExample] = useState(10)
  const HandleClick = (name) => {
    setCount(count + 1)
  }

  const HandleSub = () => {
    setExample(example - 1)
  }

  useEffect(() => {
    console.log('compount mount')
  }, [])

  useEffect(() => {
    console.log('component update');
  }, [count])




  return (
    <div>
      <h1>{count}</h1>
      <h1>sub {example}</h1>
      <button name='add' onClick={(e) => HandleClick(e.target.name)}>add</button>
      <button name='sub' onClick={(e) => HandleSub(e.target.name)}>sub</button>

    </div>
  )
}

// dom document object module
// to implement react life cycle useEffect