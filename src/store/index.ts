import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxPromise from 'redux-promise'

import reduxThunk from 'redux-thunk'
import global from './module/global'

// 整合reducer
const reducer = combineReducers({
  global,
})

const persistConfig = {
  key: 'redux-state',
  storage,
}

// persist reducer
const persistReducerConfig = persistReducer(persistConfig, reducer)

// 创建store
export const store = configureStore({
  reducer: persistReducerConfig,
  // 中间件
  middleware: [reduxThunk, reduxPromise],
  devTools: true,
})

export const persistSt = persistStore(store)
