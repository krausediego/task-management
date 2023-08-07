import { Icon } from "@/components/ui";
import { MenuItemsProps } from "./menuItems";
import { useRouter, usePathname } from "next/navigation";

function MenuItem({ name, icon, path }: MenuItemsProps) {
  const pathName = usePathname();
  const active = pathName.includes(path);
  const router = useRouter();

  return (
    <button
      data-active={active}
      onClick={() => router.push(path)}
      className="w-44 pl-4 data-[active=true]:bg-zinc-100 flex gap-2 py-3 rounded-lg"
      key={name}
    >
      <Icon
        data-active={active}
        className="w-6 h-6 text-secondaryColor-300 data-[active=true]:text-secondaryColor-500"
        name={icon}
      />
      <div
        data-active={active}
        className="font-semibold text-secondaryColor-300 data-[active=true]:text-secondaryColor-500"
      >
        {name}
      </div>
    </button>
  );
}

export { MenuItem };
