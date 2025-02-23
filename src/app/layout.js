import { Montserrat } from 'next/font/google';
import '@styles/app.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Home | MoovieTime",
  description: "Movie Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
