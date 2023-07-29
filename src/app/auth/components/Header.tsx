interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <div>
      <h1 className="text-3xl text-blue-950 font-semibold leading-10">
        {title}
      </h1>
      <p className="font-light text-zinc-500">{description}</p>
    </div>
  );
}

export { Header };
