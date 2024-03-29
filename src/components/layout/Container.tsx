import React, { FC, ReactNode } from "react";

import styles from "./Container.module.scss";

interface ContainerPropTypes {
  children: ReactNode;
}

const Container: FC<ContainerPropTypes> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
