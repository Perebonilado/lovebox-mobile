import {configureStore,} from '@reduxjs/toolkit';
import {authApi} from '../services/authService';
import {loveboxApi} from '../services/loveboxService';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [loveboxApi.reducerPath]: loveboxApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware, loveboxApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
