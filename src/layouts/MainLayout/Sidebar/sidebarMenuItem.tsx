import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SidebarMenuItemProps {
  link?: string;
  Icon?: React.ElementType;
  active?: boolean;
  label: string;
  expanded?: boolean;
  children?: ReactNode;
}

const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { label, Icon, expanded, active, children, link } = props;
  const navigate = useNavigate();

  const renderItemWithSubMenu = () => (
    <>
      {expanded ? (
        <Disclosure defaultOpen={active}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`p-2 mt-4 w-full flex items-center rounded-sm cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
                  !expanded && active
                    ? "bg-mid-grey text-white border-light-blue border-l-4"
                    : ""
                }`}
              >
                {Icon && (
                  <div className={`h-[24px] w-[24px] flex-shrink-0`}>
                    <Icon />
                  </div>
                )}
                <span className="p-1 text-[16px] ml-4 font-bold mr-auto">
                  {label}
                </span>
                {children && (
                  <ChevronDownIcon
                    className={`h-[16px] w-[16px] flex-shrink-0 transition-transform duration-200 ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                )}
              </Disclosure.Button>
              <Transition
                show={open}
                className="overflow-hidden"
                enter="transition-all duration-300 ease-in-out"
                enterFrom="transform max-h-0"
                enterTo="transform max-h-screen"
                leave="transition-all duration-200 ease-in-out"
                leaveFrom="transform max-h-screen"
                leaveTo="transform max-h-0"
              >
                <Disclosure.Panel>{children}</Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ) : (
        <Popover>
          {({ close }) => (
            <>
              <Popover.Button
                className={`p-2 mt-4 w-full flex items-center rounded-sm cursor-pointer focus-visible:outline-none text-light-font hover:bg-mid-grey hover:text-white ${
                  active
                    ? "bg-mid-grey text-white border-light-blue border-l-4"
                    : ""
                }`}
              >
                {Icon && (
                  <div className={`h-[24px] w-[24px] flex-shrink-0 mx-auto`}>
                    <Icon />
                  </div>
                )}
              </Popover.Button>
              <Transition
                className="absolute left-10 z-50"
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className="p-2 rounded-md bg-black"
                  onClick={() => close()}
                >
                  {children}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )}
    </>
  );

  const renderItem = () => (
    <div
      className={`p-2 mt-4 flex items-center rounded-sm cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
        active ? "bg-mid-grey text-white border-light-blue border-l-4" : ""
      }`}
      onClick={() => navigate(link)}
    >
      {Icon && (
        <div
          className={`h-[24px] w-[24px] flex-shrink-0 ${
            expanded ? "" : "mx-auto"
          }`}
        >
          <Icon />
        </div>
      )}
      {expanded && (
        <>
          <span className={`p-1 text-[16px] font-bold mr-auto ml-4`}>
            {label}
          </span>
        </>
      )}
    </div>
  );

  return <>{children ? renderItemWithSubMenu() : renderItem()}</>;
};

const SidebarSubMenuItem = (props: SidebarMenuItemProps) => {
  const { label, Icon, expanded, active, link } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`p-1 pl-4 mt-1 flex items-center rounded-sm cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
        active ? "bg-mid-grey text-white" : ""
      } ${expanded && active ? "border-light-blue border-l-4" : ""}`}
      onClick={() => navigate(link)}
    >
      {Icon && (
        <div
          className={`h-[24px] w-[24px] flex-shrink-0 ${
            expanded ? "" : "mx-auto"
          }`}
        >
          <Icon />
        </div>
      )}
      <span className={`p-1 text-[16px] mr-auto ${expanded ? "ml-4" : ""}`}>
        {label}
      </span>
    </div>
  );
};

export { SidebarMenuItem, SidebarSubMenuItem };
