import { Suspense } from "react";
import AppBar from "../AppBar/AppBar.jsx";
import Loader from "../Loader/Loader.jsx";
import SuspenseFallback from "../SuspenseFallback/SuspenseFallback.jsx";
import css from "./Loyout.module.css";

export default function Layout({ children, isLoading }) {
  return (
    <div>
      <AppBar />
      {isLoading && <Loader />}
      <main className={css.container}>
        <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
      </main>
    </div>
  );
}
