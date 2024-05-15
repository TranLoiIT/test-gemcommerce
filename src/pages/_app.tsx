import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import HeadHomePage from "../components/head-page/home";
import { store } from "../store/configStore";
import "../styles/_app.scss";
import "../styles/globals.css";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeadHomePage />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
