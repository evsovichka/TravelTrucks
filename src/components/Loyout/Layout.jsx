import AppBar from "../AppBar/AppBar.jsx";
import { Suspense } from "react";
import css from "./Loyout.module.css";
import SuspenseFallback from "../SuspenseFallback/SuspenseFallback.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <main className={css.container}>
        <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
      </main>
    </div>
  );
}
