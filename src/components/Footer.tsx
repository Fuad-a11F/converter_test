import React from "react";

import styles from "./Footer.module.scss";
import Link from "./parts/Link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__row}>
        <div>
          <Link
            title={"@fuad_JS_2001"}
            href={"https://t.me/fuad_JS_2001"}
            label={"Telegram"}
          />

          <Link
            title={"https://www.linkedin.com/in/fuad-7898b8159/"}
            href={"https://www.linkedin.com/in/fuad-7898b8159/"}
            label={"LinkedIn"}
          />

          <Link
            title={"https://github.com/Fuad-a11F"}
            href={"https://github.com/Fuad-a11F"}
            label={"GitHub"}
          />
        </div>

        <Link
          title={"Посмотреть CV"}
          href={
            "https://drive.google.com/file/d/1U6gqZZJ084XxZLRMlUSfBScIArYFVgR4/view?usp=sharing"
          }
          className={styles.cv}
        />
      </div>
    </div>
  );
};

export default Footer;
