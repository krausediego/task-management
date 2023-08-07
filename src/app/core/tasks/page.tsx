"use client";

import { HeaderContent, Content } from "../components";
import { useRouter } from "next/navigation";

function CoreTasks() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/core/tasks/task");
  };

  return (
    <>
      <HeaderContent
        handleNavigate={handleNavigate}
        buttonAddTitle="Adicionar tarefa"
      />
      <Content>
        <span>Tasks</span>
      </Content>
    </>
  );
}

export default CoreTasks;
