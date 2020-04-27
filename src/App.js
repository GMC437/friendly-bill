import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyleConstants } from "./shared/constants";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers";
import rootSaga from "./sagas";
import welcomeIcon from "./assets/welcome.jpg";

const sagaMiddleware = createSagaMiddleware();
const enhancers = applyMiddleware(sagaMiddleware);
const store = createStore(appReducer, enhancers);
sagaMiddleware.run(rootSaga);
const { blue, yellow } = StyleConstants;
const theme = {
  blue,
  yellow,
};

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <img src={welcomeIcon} alt="Welcome!" />
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
