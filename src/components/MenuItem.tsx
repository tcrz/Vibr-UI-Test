import { FC } from 'react'
import { MenuItemData } from './Nav/Navbar'

type MenuItemProps = MenuItemData

const MenuItem: FC<MenuItemProps> = ({icon, name}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {icon}
      <p>{name}</p>
    </div>
  )
}

export default MenuItem