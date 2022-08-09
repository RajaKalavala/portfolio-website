import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
    </div>
  );
}
