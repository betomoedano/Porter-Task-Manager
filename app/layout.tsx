import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-full max-w-screen-xl mx-auto p-6 md:p-16 bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
