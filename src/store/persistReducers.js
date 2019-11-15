// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "cdu",
      storage: AsyncStorage,
      whitelist: ["auth"]
    },
    reducers
  );

  return persistedReducer;
};
