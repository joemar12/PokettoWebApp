import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
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
    <Disclosure defaultOpen={active}>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`p-2 mt-4 w-full flex items-center rounded-md cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
              !expanded && active ? "bg-mid-grey text-white" : ""
            }`}
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
                <span className="text-[16px] ml-4 font-bold mr-auto">
                  {label}
                </span>
                {children && (
                  <ChevronDownIcon
                    className={`h-[16px] w-[16px] flex-shrink-0 transition-transform duration-200 ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                )}
              </>
            )}
          </Disclosure.Button>
          {expanded && (
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
          )}
        </>
      )}
    </Disclosure>
  );

  const renderItem = () => (
    <div
      className={`p-2 mt-4 flex items-center rounded-md cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
        active ? "bg-mid-grey text-white" : ""
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
          <span className="text-[16px] ml-4 font-bold mr-auto">{label}</span>
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
      className={`p-1 ml-4 flex items-center rounded-md cursor-pointer text-light-font hover:bg-mid-grey hover:text-white ${
        active ? "bg-mid-grey text-white" : ""
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
          <span className="text-[16px] ml-4 mr-auto">{label}</span>
        </>
      )}
    </div>
  );
};

export { SidebarMenuItem, SidebarSubMenuItem };
