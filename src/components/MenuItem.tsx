import { FC } from 'react'
import { MenuItemData } from './Navbar'

type MenuItemProps = MenuItemData

const MenuItem: FC<MenuItemProps> = ({icon, name}) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p>{name}</p>
    </div>
  )
}

export default MenuItem