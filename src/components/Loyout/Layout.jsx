import AppBar from "../AppBar/AppBar.jsx";
import { Suspense } from "react";
import css from "./Loyout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <main className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </div>
  );
}
