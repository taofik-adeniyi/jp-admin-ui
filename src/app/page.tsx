import Image from "next/image";
import styles from "./Home.module.css";
import ClientPortal from "@/components/ClientPortal";
import { Portal } from "@/components/Portal";
import { Modal } from "@/components/Modal";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World!</h1>
    </main>
  );
}
