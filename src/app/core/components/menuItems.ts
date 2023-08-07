import { dynamicIconImports } from "lucide-react";

export interface MenuItemsProps {
  name: string;
  path: string;
  icon: keyof typeof dynamicIconImports;
}

const menuItems: MenuItemsProps[] = [
  {
    name: "Dashboard",
    path: "/core/dashboard",
    icon: "layout-dashboard",
  },
  {
    name: "Tarefas",
    path: "/core/tasks",
    icon: "book-open",
  },
  {
    name: "Calendário",
    path: "/core/calendar",
    icon: "calendar",
  },
  {
    name: "Times",
    path: "/core/teams",
    icon: "users-2",
  },
];

export { menuItems };
