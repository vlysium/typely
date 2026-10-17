import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";

import styles from "./index.module.css";
import { Sidebar } from "@/components/sidebar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className={clsx(styles["app-container"])}>
      <Sidebar />
    </div>
  );
}
