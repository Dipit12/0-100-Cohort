export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        20% for the next 3 days
        {children}
      </div>
    );
  }