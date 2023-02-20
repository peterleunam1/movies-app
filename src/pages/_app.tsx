import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "@/globalStyles";
import { Suspense } from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
