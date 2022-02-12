import React, { createContext, useReducer } from "react";
import { createBreakpoint } from "react-use";

export const MainContext = createContext(null);

const initState = {
  navbarHeight: 0,
  screenType: ""
};

export const CONSTANT = {
  SET_NAVBAR_HEIGHT: "NAVBAR_HEIGHT",
  SET_SCREEN_TYPE: "SET_SCREEN_TYPE"
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONSTANT.SET_NAVBAR_HEIGHT:
      return { ...state, navbarHeight: action.payload };
    case CONSTANT.SET_SCREEN_TYPE:
      return { ...state, screenType: action.payload };
    default:
      return state;
  }
};

const useBreakpoint = createBreakpoint({
  'mobile': 320,
  'tablet': 639,
  'laptop': 1023,
  'desktop': 1279,
});


const withMainContext = (App) => {
  return (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    // useEffect(() => { }, []);
    const breakpoint = useBreakpoint()
    return (
      <MainContext.Provider value={{ state, dispatch, breakpoint }}>
        <App {...props} />
      </MainContext.Provider>
    );
  };
};

export default withMainContext;
