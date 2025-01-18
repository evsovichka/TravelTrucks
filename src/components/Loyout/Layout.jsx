import AppBar from "../AppBar/AppBar.jsx";
import { Suspense } from "react";
import css from "./Loyout.module.css";
import SuspenseFallback from "../SuspenseFallback/SuspenseFallback.jsx";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Layout({ children }) {
  const location = useLocation();

  const routesWithAppBar = [
    "/",
    "/catalog",
    "/catalog/orders",
    "/catalog/bookingForm",
  ];
  const shouldShowAppBar =
    routesWithAppBar.includes(location.pathname) ||
    location.pathname.startsWith("/catalog/");

  return (
    <div>
      {shouldShowAppBar && <AppBar />}
      <main
        className={clsx(css.container, { [css.withAppBar]: shouldShowAppBar })}
      >
        <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
      </main>
    </div>
  );
}
