import { FC } from 'react'
import { MenuItemData } from './Nav/Navbar'

type MenuItemProps = MenuItemData & { isActive: boolean }

const MenuItem: FC<MenuItemProps> = ({icon, name, isActive}) => {
  return (
    <div className={`flex items-center gap-2 cursor-pointer ${isActive ? "bg-[#F3F4F6] text-black font-semibold" : ""} p-2 rounded-xl`}>
      {icon}
      <p>{name}</p>
    </div>
  )
}

export default MenuItem