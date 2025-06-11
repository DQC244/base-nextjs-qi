import { PayloadAction, WithSlice, createSlice } from "@reduxjs/toolkit";
import { rootReducer } from "../../../redux/reducer";
import { AppConstant } from "@/constant";
import { IPaginationModel } from "@/models/response.model";

/* ------------- Initial State ------------- */
export interface IInitialState {
  isFetching: boolean;
  error: object | string | null;

  pagination: IPaginationModel;
}

const initialState: IInitialState = {
  isFetching: false,
  error: null,

  pagination: AppConstant.DEFAULT_PAGINATION_SKIP_TAKE,
};

/* ------------- Selector ------------- */
const selectors = {
  getFetching: (state: IInitialState) => state.isFetching,
};

/* ------------- Reducers ------------- */
const reducers = {
  loginFailure: (state: IInitialState, action: PayloadAction<any>) => {
    state.isFetching = false;
    state.error = action.payload ?? {};
  },
  loginReset: (state: IInitialState) => {
    state.isFetching = false;
    state.error = null;
  },
};

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers,
  selectors,
});

export const loginActions = loginSlice.actions;

declare module "@/redux/reducer" {
  export interface LazyLoadedSlices extends WithSlice<typeof loginSlice> {}
}

// Inject reducer
const injectedLoginSlice = loginSlice.injectInto(rootReducer);

export const loginSelectors = injectedLoginSlice.selectors;
