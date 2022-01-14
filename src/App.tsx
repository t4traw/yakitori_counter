import Menu from './components/Menu'
import menuList from './menuList'

const Yakitori = () => {
  return (
    <div className="pb-24">
      <div className="grid grid-cols-1 gap-2">
        <h2 className="p-3 text-2xl">
          たれ<span className="text-sm">(1本あたり)</span>
        </h2>
        {menuList.tare.map((menu) => {
          return <Menu key={menu.name} name={menu.name} price={menu.price} mode="tare" />
        })}
        <h2 className="p-3 text-2xl">
          しお<span className="text-sm">(1本あたり)</span>
        </h2>
        {menuList.sio.map((menu) => {
          return <Menu key={menu.name} name={menu.name} price={menu.price} mode="sio" />
        })}
        <h2 className="p-3 text-2xl">
          惣菜<span className="text-sm">(100gあたり)</span>
        </h2>
        {menuList.sozai.map((menu) => {
          return <Menu key={menu.name} name={menu.name} price={menu.price} mode="souzai" />
        })}
      </div>
    </div>
  )
}

export default Yakitori
