import PropTypes from "prop-types";

import { useState, createContext } from "react";

export const AppContext = createContext({
  currentPage: "",
  setCurrentPage: () => {},
});

const AppProvider = (props) => {
  const [currentPage, setCurrentPage] = useState();
  const [scrollPosition, setScrollPosition] = useState(() => {
    return document.documentElement.scrollTop;
  });

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        scrollPosition,
        setScrollPosition,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.element,
};
