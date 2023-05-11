import type { AppProps } from "next/app";
import "src/styles/index.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Context from "@/lib/context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Context.Provider
      value={{
        mobileMenuIsOpened,
        setMobileMenuIsOpened,
        showHeader,
        setShowHeader,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
