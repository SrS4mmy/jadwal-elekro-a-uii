import dynamic from "next/dynamic";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";

import type { GetStaticProps } from "next";

import { lato } from "@/utils/font";
import styles from "@/styles/Home.module.css";

import type { IFooter } from "@/components/Footer";
import { JadwalJson } from "@/types/jadwal";

const Footer = dynamic<IFooter>(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { ssr: false }
);

export const getStaticProps: GetStaticProps = async () => {
  const jadwalPath = path.join(path.resolve(), "data", "jadwal.json");
  const jadwalString = fs.readFileSync(jadwalPath, "utf8");

  const jadwal = await JadwalJson.parseAsync(JSON.parse(jadwalString));

  return {
    props: {
      classLists: jadwal.map((jadwal) => jadwal.className),
    },
  };
};

const Home = ({ classLists }: { classLists: string[] }) => {
  useEffect(() => {
    const className = localStorage.getItem("favourite-class");

    if (className) {
      Router.replace(`/class/${className}`);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Jadwal Mata Kuliah</title>
        <meta
          name="description"
          content="Daftar Mata Kuliah Elektro A Universitas Islam Indonesia"
        />
      </Head>

      <header className={`${styles.header} ${lato.className}`}>
        <h1>Daftar Mata Kuliah Elektro (A)</h1>
        <h2>Tahun Ajaran 2022/2023</h2>
        <h3>Universitas Islam Indonesia</h3>
      </header>

      <hr className={styles.horizontalRuler} />

      {<main className={styles.mainContent}>
        {/* <div className={styles.favouriteClass}>
          <p className={styles.currentClass}>Kelasmu Saat Ini :</p>
        </div> */}

        <ul
          className={`flex one two-500 three-600 four-800 ${styles.jadwalList}`}
        >
          {classLists.map((className: string) => (
            <li key={className} className={styles.listItem}>
              <Link href={`/class/${className}`}>
                Jadwal Mata Kuliah {className.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </main>}
      <Footer />
    </div>
  );
};

export default Home;
