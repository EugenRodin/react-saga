import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.ts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './counterSagas.ts'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store