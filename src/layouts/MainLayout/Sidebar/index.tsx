import { useAppSelector } from "../../../hooks";
import { selectSidebarIsOpen } from "./sidebar.slice";

interface SidebarItemProps {
  label: string;
}
const SidebarItem = ({ label }: SidebarItemProps) => {
  return (
    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-house-door-fill"></i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
    </div>
  );
};

const Siderbar = () => {
  const sidebarIsOpen = useAppSelector((state) => selectSidebarIsOpen(state));
  return (
    <aside
      className={`${
        sidebarIsOpen ? "w-64" : "w-0"
      } flex-shrink-0 p-1 z-50 flex flex-col shadow-lg shadow-slate-900 transition-all duration-300 bg-slate-900 overflow-y-auto`}
    >
      <div className="h-24"></div>
      <SidebarItem label="Dashboards" />
      <SidebarItem label="Operation" />
      <SidebarItem label="Management" />
    </aside>
  );
};

export default Siderbar;
