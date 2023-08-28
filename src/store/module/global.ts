import { createSlice } from '@reduxjs/toolkit'
import { globalType } from '../type'

const initialState: globalType = {
  token: '',
  userInfo: {},
  themeColor: '',
}

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    setToken(state, { payload }) {
      state.token = payload
    },
  },
})

export const { setToken } = globalSlice.actions
export default globalSlice.reducer
