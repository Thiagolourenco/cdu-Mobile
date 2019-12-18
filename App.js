import React from "react";
import { StatusBar } from 'react-native'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import FlashMessage from 'react-native-flash-message'

import "./src/config/ReactotronConfig";

import Index from "./src";

import { store, persistor } from "./src/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <StatusBar barStyle="light-content" backgroundColor="blue"/>
            <Index />
            <FlashMessage position="top"/>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
