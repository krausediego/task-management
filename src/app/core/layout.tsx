import { Menu, Header } from "./components";

function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex">
      <Menu />
      <div className="w-full h-full">
        <Header title="Tarefas" />
        <div className="w-full h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </div>
  );
}

export default CoreLayout;
