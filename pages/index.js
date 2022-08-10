import Head from "next/head";
import Image from "next/image";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
    </div>
  );
}
