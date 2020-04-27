import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { StyleConstants } from "./shared/constants";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./reducers";
import rootSaga from "./sagas";
import RouterNav from "./components/router/RouterNav";
import RouterBody from "./components/router/RouterBody";

const sagaMiddleware = createSagaMiddleware();
const enhancers = applyMiddleware(sagaMiddleware);
const store = createStore(appReducer, enhancers);
sagaMiddleware.run(rootSaga);
const { blue, yellow } = StyleConstants;
const theme = {
  blue,
  yellow,
};

const AppHeader = styled.div`
  display: flex;
  color: white;
  background-color: #0815FF;
  justify-content: space-between;
  padding: 10px;
`;

const SiteName = styled.h1`
  margin: 0;
  font-size: 20px;
  @media (max-width: 426px) {
    margin: 0 auto;
  }
`;

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <AppHeader>
              <SiteName>Friendly Bill</SiteName>
              <RouterNav />
            </AppHeader>
            <RouterBody />
          </>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default App;
