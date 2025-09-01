import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const adminSidebarItems: Array<ISidebarItem> = [
  ...commonSidebar,
  {
    title: "Wallet",
    items: [
      {
        title: "overview",
        url: "overview",
        component: component.AdminOverView,
      },
      {
        title: "manage users",
        url: "manage-users",
        component: component.ManageUsers,
      },
      {
        title: "manage agent",
        url: "manage-agent",
        component: component.ManageAgent,
      },
      {
        title: "all transaction history",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
  {
    title: "others actions",
    items: [
      {
        title: "application for agent",
        url: "application-for-agent",
        component: component.ApplicationsForAgent,
      },
    ],
  },
];

export default adminSidebarItems;
