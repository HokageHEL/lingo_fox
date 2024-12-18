import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main";

const App: React.FC = () => {
  return (
    <div className="px-10">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
