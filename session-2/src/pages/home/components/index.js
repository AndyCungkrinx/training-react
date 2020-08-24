import React from "react";
import Header from "./Header";
import Content from "./Content";
import { Provider } from "../state";
import { useSelector } from "react-redux";
import List from "./List";

const Footer = () => {
  return <p>footer</p>;
};

const HomePage = () => {
  const [theme, setTheme] = React.useState({
    color: "red"
  });

  const data = useSelector((state) => state.home);
  console.log(data);
  return (
    <>
      <Provider
        value={{
          color: "green"
        }}
      >
        <div>
          <Header theme={theme} />
          <Content />
          <List />
        </div>
      </Provider>
      <Footer />
    </>
  );
};

export default HomePage;
