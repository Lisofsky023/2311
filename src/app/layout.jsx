import TheHeader from '@/components/header/TheHeader';
import TheFooter from '@/components/footer/TheFooter';
import BackgroundPage from '@/components/background/Back';
import SideBar from '@/components/navigation/TheSideBar';
import { rajdhani, teko } from '../fonts/fonts';
import './globals.css';

export const metadata = {
  title: '2311',
  description: 'On-line store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${teko.variable}`}>
      <BackgroundPage />
        <TheHeader />
          <main className='main'>
            <div className="container">
          {/* <SideBar/> */}
              {children}
            </div>
          </main>
        <TheFooter />
      </body>
    </html>
  );
};
