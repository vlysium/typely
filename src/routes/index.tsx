import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import styles from "./index.module.css";
import { Board } from "@/components/board";
import { Sidebar } from "@/components/sidebar";
import { loadFonts } from "@/server/fonts";

export const Route = createFileRoute("/")({
  loader: () => loadFonts(),
  component: Home
});

function Home() {
  return (
    <div className={clsx(styles["app-container"])}>
      <Sidebar />
      <Board />
    </div>
  );
}
