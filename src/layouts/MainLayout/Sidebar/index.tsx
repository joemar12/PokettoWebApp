import { matchPath, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { selectSidebarIsOpen } from "./sidebar.slice";
import { SidebarMenuItem, SidebarSubMenuItem } from "./sidebarMenuItem";
import items, { MenuItem } from "./items";

const Siderbar = () => {
  const sidebarIsOpen = useAppSelector((state) => selectSidebarIsOpen(state));
  const location = useLocation();

  const getMenuActiveState = (item: MenuItem) => {
    return item.link
      ? !!matchPath({ path: item.link, end: true }, location.pathname)
      : false;
  };

  return (
    <aside
      className={`${
        sidebarIsOpen ? "w-64" : "w-16"
      } p-2 flex flex-col transition-[width] duration-200 bg-black overflow-y-auto overflow-x-hidden`}
    >
      <div className="h-24"></div>
      <ul>
        {items.map((item) => {
          const isMenuActive = getMenuActiveState(item);
          const isAnySubItemActive = item.items
            ? item.items.some((x) => getMenuActiveState(x))
            : false;
          return (
            <li key={item.index}>
              <SidebarMenuItem
                label={item.label}
                Icon={item.icon}
                expanded={sidebarIsOpen}
                active={isMenuActive || isAnySubItemActive}
                link={item.link}
              >
                {item.items && (
                  <ul>
                    {item.items.map((subItem) => {
                      const isSubMenuActive = getMenuActiveState(subItem);
                      return (
                        <li key={subItem.index}>
                          <SidebarSubMenuItem
                            label={subItem.label}
                            link={subItem.link}
                            expanded={sidebarIsOpen}
                            active={isSubMenuActive}
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </SidebarMenuItem>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Siderbar;
