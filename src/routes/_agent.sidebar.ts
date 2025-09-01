import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const agentSidebarItems: Array<ISidebarItem> = [
  ...commonSidebar,
  {
    title: "Wallet",
    items: [
      {
        title: "deposit money",
        url: "deposit-money",
        component: component.DepositMoney,
      },
      {
        title: "cash in",
        url: "cash-in",
        component: component.CashIn,
      },
      {
        title: "transaction history",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
];

export default agentSidebarItems;
