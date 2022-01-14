import { useStore } from '../store'

const PriceCounterComponent = () => {
  const state = useStore()

  return (
    <div className="fixed bottom-0 bg-gray-700 w-full p-4">
      <div className="flex justify-between text-white font-bold text-2xl">
        <p>合計: </p>
        <p className="">{state.price} 円</p>
      </div>
    </div>
  )
}

export default PriceCounterComponent
