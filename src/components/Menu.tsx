import { useState } from 'react'
import { useStore } from '../store'

interface Props {
  name: string
  price: number
  mode: string
}

const Menu = ({ name, price, mode }: Props) => {
  const determine = (mode: string): string => {
    switch (mode) {
      case 'tare':
        return 'bg-orange-200'
      case 'sio':
        return 'bg-blue-200'
      default:
        return 'bg-gray-200'
    }
  }
  const backGroundColor = determine(mode)

  const state = useStore()
  const addMenu = (e: any) => {
    state.increase(price)
    setQuantity(quantity + 1)
  }
  const removeMenu = (e: any) => {
    state.decrease(price)
    setQuantity(quantity - 1)
  }

  const [quantity, setQuantity] = useState(0)

  return (
    <div className={`shadow py-2 px-4 ${backGroundColor}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">
          <p className="text-m">{name}</p>
          <p className="text-sm">{price}円</p>
        </h2>
        <div className="buttonGroup inline-flex">
          <div className="text-2xl py-2 px-4">{quantity}</div>
          <button className="bg-white text-gray-800 text-2xl font-bold py-2 px-3" onClick={addMenu}>
            +
          </button>
          <button className="bg-white text-gray-800 text-2xl font-bold py-2 px-3" onClick={removeMenu}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
