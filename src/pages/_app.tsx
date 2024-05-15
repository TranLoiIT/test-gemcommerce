import { Inter } from 'next/font/google'
import type { AppProps } from "next/app";
import "../styles/_app.scss";
import "../styles/globals.css";
import { Provider } from 'react-redux';
import { store } from '../store/configStore';
import HeadHomePage from '../components/head-page/home';
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeadHomePage />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}