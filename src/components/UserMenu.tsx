import { FC } from "react";
import { ArrowDown } from "./SVGs/CustomSVGs.tsx";

type UserMenuProps = {
  name: string;
  email: string;
};

const UserMenu:FC<UserMenuProps> = ({name, email}) => {
  return (
    <div className="border border-[rgba(204, 207, 206, 0.24)] bg-white rounded-md p-[5px] px-6 flex items-center gap-2">
      <div>
        <p className="font-semibold m-0 text-[14px]">{name}</p>
        <p className="m-0 text-[#A6A6A5] text-[14px]">{email}</p>
      </div>
      <ArrowDown width="20" height="20" />
    </div>
  );
};

export default UserMenu;
