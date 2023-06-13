import {
  ChartPieIcon,
  SquaresPlusIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

export interface MenuItem {
  index: number;
  icon?: any;
  label: string;
  link?: string;
  items?: MenuItem[];
}

const sidebarMenu: MenuItem[] = [
  {
    index: 1,
    icon: ChartPieIcon,
    label: "Dashboards",
    items: [
      {
        index: 1,
        label: "Simple",
        link: "/dashboard/simple",
      },
    ],
  },
  {
    index: 2,
    icon: SquaresPlusIcon,
    label: "Management",
    items: [
      {
        index: 1,
        label: "Accounts",
        link: "/management/accounts",
      },
    ],
  },
  {
    index: 3,
    icon: CreditCardIcon,
    label: "Transactions",
    items: [
      {
        index: 1,
        label: "Transfers",
        link: "/transactions/transfers",
      },
      {
        index: 2,
        label: "Payments",
        link: "/transactions/payments",
      },
    ],
  },
  {
    index: 4,
    icon: Cog8ToothIcon,
    label: "Settings",
    link: "/settings"
  }
];

export default sidebarMenu;
