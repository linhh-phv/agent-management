import {AnyAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {isClearAction, isRejectedAction, isRequestAction} from '~redux/helpers';
import {AppModel, AuthModel} from '~models';
import {IError} from '~constants/baseCallback';
import {signOutSuccessded} from '~redux/modules/auth/slice';

/**
 * define data type of a slice module Account
 */
export interface IAppState {
  error?: IError;
  loading?: boolean;
}

/**
 *  initialize default value
 */
const initialState: IAppState = {
  error: undefined,
  loading: false,
};

/**
 * create slice containing the actions and handle them
 */
const prefix = 'app';
export const appSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signOutSuccessded, () => initialState)
      .addMatcher(
        isRejectedAction,
        (state: IAppState, action: PayloadAction<IError>) => {
          state.error = action.payload;
          state.loading = false;
        },
      )
      .addMatcher(isRequestAction, (state, action: AnyAction) => {
        state.loading = true;
      })
      .addMatcher(isClearAction, (state, action: AnyAction) => initialState)
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {
        //
      });
  },
});

/**
 * Action creators are generated for each case reducer function
 * */
export const {} = appSlice.actions;

export default appSlice.reducer;
