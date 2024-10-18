import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { increment, decrement } from '../../features/counterSlice'
import Button from '../atoms/Button'

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-2xl">Counter: {count}</h1>
      <div className="flex space-x-4">
        <Button label="Increment" onClick={() => dispatch(increment())} />
        <Button label="Decrement" onClick={() => dispatch(decrement())} />
      </div>
    </div>
  )
}

export default Counter
