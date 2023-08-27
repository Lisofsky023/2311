import { Rajdhani, Teko } from 'next/font/google';

export const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  variable: '--rajdhani',
  weight: ['300','400','500','600','700'],
  display: 'swap',

});

export const teko = Teko({ 
  subsets: ['latin'],
  variable: '--handjet',
  weight: ['400'],
  display: 'swap',
   
});
