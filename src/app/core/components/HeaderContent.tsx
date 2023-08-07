"use client";

import { Button, Input } from "@/components/ui";
import { ArrowDownUp, LayoutDashboard, Plus } from "lucide-react";

interface ContentProps {
  buttonAddTitle: string;
  handleNavigate: () => void;
}

function HeaderContent({ buttonAddTitle, handleNavigate }: ContentProps) {
  return (
    <div className="h-24 w-full bg-white flex justify-between px-10">
      <div>
        <Input placeholder="Buscar" sizeStyle="xl" />
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="xl">
          <LayoutDashboard className="text-secondaryColor-300" />
          <span className="text-sm text-secondaryColor-500 font-semibold">
            Categoria
          </span>
        </Button>
        <Button variant="outline" size="xl">
          <ArrowDownUp className="text-secondaryColor-300" />
          <span className="text-sm text-secondaryColor-500 font-semibold">
            Ordenar
          </span>
        </Button>
        <Button onClick={handleNavigate} variant="outline" size="xl">
          <Plus className="text-secondaryColor-300" />
          <span className="text-sm text-secondaryColor-500 font-semibold">
            {buttonAddTitle}
          </span>
        </Button>
      </div>
    </div>
  );
}

export { HeaderContent };
