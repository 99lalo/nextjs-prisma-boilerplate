import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>This boilerplate contains:</h1>
        <h2>
          <ul>
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://www.prisma.io/nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prisma
              </a>
            </li>
            <li>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL
              </a>
            </li>
            <li>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SASS
              </a>
            </li>
            <li>
              <a
                href="https://mui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material UI
              </a>
            </li>
            <li>
              <a
                href="https://next-auth.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NextAuth.js
              </a>
            </li>
          </ul>
        </h2>
        <h3>
          Created by{" "}
          <a
            href="https://github.com/99lalo"
            target="_blank"
            rel="noopener noreferrer"
          >
            99lalo
          </a>
        </h3>
      </div>
    </main>
  );
}
