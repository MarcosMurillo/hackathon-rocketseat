import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from 'mobx-react'
import RootStore from './stores/RootStore'

function App() {
  return (
    <Provider rootStore={RootStore}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
