interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="w-full h-24 flex items-center px-4">
      <h1 className="text-2xl font-semibold text-secondaryColor-500">
        {title}
      </h1>
    </div>
  );
}

export { Header };
