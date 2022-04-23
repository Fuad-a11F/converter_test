import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/layout/Container";
import styles from "./App.module.scss";
import Converter from "./components/Converter";

const App = () => {
  return (
    <Container>
      <div className={styles.view}>
        <Header />

        <Converter />

        <Footer />
      </div>
    </Container>
  );
};

export default App;
