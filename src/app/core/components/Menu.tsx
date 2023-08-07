"use client";

import { menuItems } from "./menuItems";
import { MenuItem } from "./MenuItem";

function Menu() {
  return (
    <div className="w-64 h-full flex flex-col items-center">
      <div className="h-24">Logo</div>
      <div className="py-4 flex flex-col gap-6">
        {menuItems.map(({ name, icon, path }) => {
          return <MenuItem key={name} name={name} icon={icon} path={path} />;
        })}
      </div>
    </div>
  );
}

export { Menu };
