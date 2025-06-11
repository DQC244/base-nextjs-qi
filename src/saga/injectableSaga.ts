import { AppStore } from "@/redux/store";
import type { Saga } from "redux-saga";

export function createInjectableSaga(key: string, saga: Saga) {
  return {
    injectInto: (store: AppStore) => {
      const sagaManager = (store as any).sagaManager;
      if (!sagaManager) {
        throw new Error("Saga manager is not attached to store.");
      }

      if (!sagaManager.has(key)) {
        sagaManager.add(key, saga);
      }
    },
  };
}
