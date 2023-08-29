import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { globalType } from '../type'

const initialState: globalType = {
  token: '',
  userInfo: {},
  themeColor: '#a855f7',
}

const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    setToken(state: globalType, { payload }: PayloadAction<string>) {
      state.token = payload
    },
    setTheme(state: globalType, { payload }: PayloadAction<string>) {
      state.themeColor = payload
    },
  },
})

export const { setToken, setTheme } = globalSlice.actions
export default globalSlice.reducer
