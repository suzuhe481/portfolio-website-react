import PropTypes from "prop-types";

import { useState, createContext } from "react";

export const AppContext = createContext({
  currentPage: "",
  setCurrentPage: () => {},
});

const AppProvider = (props) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.element,
};
