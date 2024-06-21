import { includes } from "lodash";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import HeadHomePage from "../components/layout/HeaderHomePage";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import { store } from "../store/configStore";
import "../styles/_app.scss";
import "../styles/globals.css";
// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"] });
const CHECK_LAYOUT = "admin";
const LAYOUT_INGON = "login";

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <main>
        {includes(pathname, CHECK_LAYOUT) ? (
          <>
            {includes(pathname, LAYOUT_INGON) ? (
              <Component {...pageProps} />
            ) : (
              <LayoutAdmin>
                <Component {...pageProps} />
              </LayoutAdmin>
            )}
          </>
        ) : (
          <>
            <HeadHomePage />
            <Component {...pageProps} />
          </>
        )}
      </main>
    </Provider>
  );
}
