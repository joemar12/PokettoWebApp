import { ReactNode } from "react";
import { useAppDispatch } from "../../../hooks";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { toggleSidebar } from "../Sidebar/sidebar.slice";

interface HeaderItemProps {
  children?: ReactNode;
  className?: string;
}

const HeaderItem = ({ children, className }: HeaderItemProps) => {
  return <div className={`self-center p-1 ${className}`}>{children}</div>;
};

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="top-0 p-2 bg-grey flex flex-row">
        <HeaderItem className="cursor-pointer md:ml-0 ml-auto">
          <Bars3Icon
            className="w-[24px] h-[24px] text-black"
            onClick={() => dispatch(toggleSidebar())}
          ></Bars3Icon>
        </HeaderItem>
      </div>
    </>
  );
};

export default Header;
