import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const ComicFont = localFont({ src: '../../public/fonts/BadaboomBB_Reg.ttf' })
export const InterFont = Inter({ weight: ['400', '600'], display: 'swap', subsets: ['cyrillic'] })
