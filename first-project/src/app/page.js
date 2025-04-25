import Image from "next/image";
import styles from "./page.module.css";
import EventsFunctionsState from "@/components/EventsFunctionsState";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}> 

        <h2>Munna Vai MBBS</h2> 
        <EventsFunctionsState/>
      </main>
      <footer className={styles.footer}>
        
       
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
