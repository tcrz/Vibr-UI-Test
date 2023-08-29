import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuItem from '../MenuItem';
import UserMenu from '../UserMenu';
import { Anchor, items } from './Navbar';
import { FC } from 'react';

type NavDrawerProps = {
  anchor: Anchor,
  open: boolean,
  toggleDrawer:  (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const NavDrawer:FC<NavDrawerProps> = ({anchor, toggleDrawer, open}) => {
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="w-full h-full flex flex-col gap-2 mt-8 p-2">
        <div className="nav-menu p-6 borderr border-green-300 flex flex-col gap-8 text-[#808885]">
          {items.map((item) => (
            <MenuItem icon={item.icon} name={item.name} isActive={item.name === 'Customers'} />
          ))}
        </div>
        <Divider/>
        <UserMenu name="Buukmenow Demo" email="Buukmenow@gmail.com" />
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}

export default NavDrawer