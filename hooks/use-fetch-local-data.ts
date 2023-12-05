import { useEffect, useState } from 'react'

export interface FetchLocalDataState<T> {
  loading: boolean
  error: any
  data: T
}

export interface FetchLocalDataProps<DependenciesType, DataType> {
  dependencies?: DependenciesType
  initialState: DataType
}

export const useFetchLocalData = <DataType, DependenciesType>(
  func: (dependencies?: DependenciesType) => Promise<DataType>,
  { dependencies, initialState }: FetchLocalDataProps<DependenciesType, DataType>
) => {
  const [state, setState] = useState<FetchLocalDataState<DataType>>({
    loading: false,
    error: null,
    data: initialState
  })

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }))
    func(dependencies)
      .then((res) => {
        setState({ loading: false, error: null, data: res })
      })
      .catch((err) => {
        setState({ loading: false, error: err, data: initialState })
      })
  }, [dependencies])

  return state
}
