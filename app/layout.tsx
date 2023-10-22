import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-screen w-full p-6 lg:p-16 bg-slate-50`}>
        <div className="md:max-w-screen-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
