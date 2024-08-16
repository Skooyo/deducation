export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-[100vh] p-24">
        {children}
      </div>
    );
  }