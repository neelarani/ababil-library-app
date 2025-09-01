import type { ISidebarItem } from "@/types";
import commonSidebar from "./_common.sidebar";
import * as component from "@/components";

const userSidebarItems: Array<ISidebarItem> = [
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
        title: "withdraw money",
        url: "withdraw-money",
        component: component.WithdrawMoney,
      },
      {
        title: "send money",
        url: "send-money",
        component: component.SendMoney,
      },
      {
        title: "Cash Out",
        url: "cash-out",
        component: component.CashOut,
      },
      {
        title: "transaction history",
        url: "transaction-history",
        component: component.TransactionHistory,
      },
    ],
  },
  {
    title: "others actions",
    items: [
      {
        title: "request for agent",
        url: "request-for-agent",
        component: component.RequestForAgent,
      },
    ],
  },
];

export default userSidebarItems;
