import '../styles/globals.scss';

export default function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-neutral-50 flex flex-col h-screen'>{children}</body>
    </html>
  );
}
