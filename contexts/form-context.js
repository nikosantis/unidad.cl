import { createContext, useContext, useReducer, useCallback, useMemo } from 'react'

const FormStateContext = createContext()
const FormDispatchContext = createContext()

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  comment: '',
  loading: false,
  success: false,
  msg: '',
  error: ''
}

const SET_VALUE = 'SET_VALUE'
const RESET = 'RESET'

function reducer (state, action) {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    case RESET: {
      return { ...initialState }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function FormProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setValue = useCallback((field, value) => {
    dispatch({ type: SET_VALUE, payload: { field, value } })
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: RESET })
  }, [])

  const values = useMemo(() => ({ setValue, reset }), [setValue, reset])

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={values} {...props} />
    </FormStateContext.Provider>
  )
}

function useFormState () {
  const formState = useContext(FormStateContext)
  if (typeof formState === 'undefined') {
    throw new Error('useFormState must be used within a FormProvider')
  }
  return formState
}

function useFormDispatch () {
  const formDispatch = useContext(FormDispatchContext)
  if (typeof formDispatch === 'undefined') {
    throw new Error('useFormDispatch must be used within a FormProvider')
  }
  return formDispatch
}

export { FormProvider, useFormState, useFormDispatch }
