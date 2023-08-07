/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Separator } from "@/components/ui";
import { Content } from "../../components";
import { TaskTitle } from "./components/Title";
import { Clock, Users2 } from "lucide-react";
import { TaskDescription } from "./components/Description";

function Task() {
  return (
    <Content className="flex justify-center gap-10">
      <div className="w-[48%] h-full rounded-lg shadow-lg shadow-black/5 bg-white overflow-scroll">
        <img className="w-full h-80" src="/image.png" alt="qlqr coisa" />
        {/* <div className="px-4"> */}
        <TaskTitle className="mt-4 px-4" />
        <div className="mt-4 px-4 flex flex-col gap-1">
          <div className="w-full h-6 flex gap-2">
            <p className="text-sm text-secondaryColor-400">
              UI UX Design. Apps Design
            </p>
            <Separator orientation="vertical" />
            <p className="text-blue-500 text-sm">+ Get Mentors</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm text-secondaryColor-500">
              <Users2 className="w-4 h-4 text-secondaryColor-500" />
              200 Students Involved
            </div>
            <div className="flex text-sm items-center gap-1 text-secondaryColor-500">
              <Clock className="w-4 h-4 text-secondaryColor-500" />1 Hour
            </div>
          </div>
        </div>
        <TaskDescription />
        {/* </div> */}
      </div>
      <div className="w-[28%] rounded-lg shadow-lg shadow-black/5 bg-white flex flex-col p-4 gap-3">
        <h1 className="text-2xl font-medium w-full text-center">Resumo</h1>
        <div>
          <span className="text-sm">Título:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            Título
          </h1>
        </div>
        <div>
          <span className="text-sm">Criado por:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            Diego
          </h1>
        </div>
        <div>
          <span className="text-sm">Responsável:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            Diego
          </h1>
        </div>
        <div>
          <span className="text-sm">Categoria:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            Mobile
          </h1>
        </div>
        <div>
          <span className="text-sm">Tempo:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            2 dias
          </h1>
        </div>
        <div>
          <span className="text-sm">Prioridade:</span>
          <h1 className="text-2xl font-semibold text-secondaryColor-500">
            Média
          </h1>
        </div>
        {/* <div className="w-full flex justify-center"> */}
        <Button variant="outline" size="xl">
          Salvar tarefa
        </Button>
        {/* </div> */}
      </div>
    </Content>
  );
}

export default Task;
