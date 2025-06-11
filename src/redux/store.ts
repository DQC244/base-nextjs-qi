import { configureStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/saga";
import { createSagaManager } from "@/saga/sagaManager";

import { rootReducer } from "./reducer";
/* ------------- Saga Middleware ------------- */

/* ------------- Config store ------------- */

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const sagaManager = createSagaManager(sagaMiddleware);

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
        sagaMiddleware
      ),
  });

  (store as any).sagaManager = sagaManager;
  sagaMiddleware.run(rootSaga);

  return store;
};

/* ------------- type ------------- */

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
