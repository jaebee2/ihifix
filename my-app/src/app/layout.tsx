import './globals.css';

export const metadata = {
  title: 'MyApp',
  description: 'A Next.js App with Login and Signup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
