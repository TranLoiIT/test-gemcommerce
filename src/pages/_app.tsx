import type { AppProps } from "next/app";
import "../styles/_app.scss";
import "../styles/globals.css";
// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <main>
        <Component {...pageProps} />
      </main>
  );
}
