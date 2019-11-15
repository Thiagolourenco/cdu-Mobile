import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./src/config/ReactotronConfig";

import Index from "./src";

import { store, persistor } from "./src/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
