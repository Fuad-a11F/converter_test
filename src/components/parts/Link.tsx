import React, { FC } from "react";

import styles from "./Link.module.scss";

interface LinkPropTypes {
  label?: string;
  className?: string;
  href: string;
  title: string;
}

const Link: FC<LinkPropTypes> = ({ label, href, title, className }) => {
  return (
    <p className={styles.link}>
      {label && <span>{label}:</span>}{" "}
      <a className={className} href={href} target={"_blank"}>
        {title}
      </a>
    </p>
  );
};

export default Link;
