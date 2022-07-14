import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/context/store";
import "locomotive-scroll/dist/locomotive-scroll.css";
import CursorProvider from "../context/providers/cursor.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </Provider>
  );
}

export default MyApp;
