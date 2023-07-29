function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:w-[25%] p-4 rounded-lg flex flex-col gap-5">
      {children}
    </div>
  );
}

export { Container };
