import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Kaûna - Estudio Cosmetológico Integral',
  description: 'Un espacio de cuidado integral, combinando técnicas de cosmetología natural, masajes faciales y fitoterapia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lvn3vso.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/lvn3vso.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
