import { BsGithub, BsFillMoonFill, BsSun } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import Router from "next/router";

import { useDarkMode } from "@/context/darkMode";
import { useRouter } from "next/router";

import styles from "@/styles/Footer.module.css";

import type { IIndividualClass } from "@/types/jadwal";

export interface IFooter {
  showDropdown?: boolean;
  allClass?: string[];
  currentClassSchedule?: IIndividualClass;
}

const GoHome = () => (
  <article className={`card ${styles.CardStyle}`}>
    <header>
      <a
        onClick={() => {
          localStorage.removeItem("favourite-class");
          Router.replace("/");
        }}
        className={styles.goHomeButton}
        aria-label="Halaman repositori github kode website ini"
      >
        <ImHome />
      </a>
    </header>
  </article>
);

const GithubAndToggler = ({
  isDarkTheme,
  toggleTheme,
}: {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}) => (
  <>
    <article className={`card ${styles.CardStyle}`}>
      <header>
        <a
          href="https://github.com/SrS4mmy/jadwaltest3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Halaman repositori github kode website ini"
        >
          <BsGithub /> Source Code
        </a>
      </header>
    </article>
    <button
      className={`card ${styles.CardStyle} ${styles.themeToggler}`}
      onClick={(e) => {
        toggleTheme();
        (e.target as HTMLElement).blur();
      }}
      aria-label={`Ubah tema halaman menjadi ${
        isDarkTheme ? "cerah" : "gelap"
      }`}
    >
      <header>{isDarkTheme ? <BsFillMoonFill /> : <BsSun />}</header>
    </button>
  </>
);

const SelectDropdown = ({
  allClass,
  currentClassSchedule,
}: {
  allClass: string[];
  currentClassSchedule: IIndividualClass;
}) => {
  const router = useRouter();

  return (
    <select
      className={`card ${styles.CardStyle} ${styles.classSelector}`}
      onChange={(e) => {
        router.push(e.target.value);
        (e.target as HTMLElement).blur();
      }}
      value={currentClassSchedule.className}
    >
      {allClass.map((IndividualClass) => (
        <option key={IndividualClass}>{IndividualClass}</option>
      ))}
    </select>
  );
};

export const Footer = (props: IFooter) => {
  const { isDarkTheme, toggleTheme } = useDarkMode();

  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <GithubAndToggler
          isDarkTheme={isDarkTheme as boolean}
          toggleTheme={toggleTheme}
        />
      </div>
    </footer>
  );
};
