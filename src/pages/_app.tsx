import { NotificationsContainer } from "@/components/NotificationsContainer";
import { NotificationProvider } from "@/context/NotificationContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NotificationProvider>
      <Component {...pageProps} />
      <NotificationsContainer notifications={[]} onRemove={function (id: number): void {
        throw new Error("Function not implemented.");
      } } />
    </NotificationProvider>
  );
}