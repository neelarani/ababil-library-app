import * as component from "@/components";
import type { ISidebarItem } from "@/types";

const commonSidebar: Array<ISidebarItem> = [
  {
    title: "Profile",
    items: [
      {
        title: "edit profile",
        url: "edit-profile",
        component: component.UpdateProfile,
      },
      {
        title: "change password",
        url: "change-password",
        component: component.EditPassword,
      },
    ],
  },
];

export default commonSidebar;
