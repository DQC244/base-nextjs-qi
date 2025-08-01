import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook,
  useStore,
} from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();
