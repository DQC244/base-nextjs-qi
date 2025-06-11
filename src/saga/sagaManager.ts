// file: sagaManager.ts
import type { Saga, Task } from "redux-saga";
import type { SagaMiddleware } from "redux-saga";

export function createSagaManager(sagaMiddleware: SagaMiddleware) {
  const sagas: Record<string, Task> = {};

  return {
    has: (key: string) => Boolean(sagas[key]),

    add: (key: string, saga: Saga) => {
      if (sagas[key]) return;
      const task = sagaMiddleware.run(saga);
      sagas[key] = task;
    },

    remove: (key: string) => {
      const task = sagas[key];
      if (task && task.isRunning()) task.cancel();
      delete sagas[key];
    },
  };
}
