import { Ref, computed, ref, InjectionKey, inject } from 'vue'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import useSWRV, { IConfig } from 'swrv'

export type RequestKey = (() => AxiosRequestConfig) | AxiosRequestConfig

export function useHttp<Data = unknown, Error = unknown>(
  request: Ref<RequestKey>,
  config?: IConfig
) {
  return useSWRV<AxiosResponse<Data>, AxiosError<Error>>(
    () => JSON.stringify(request.value),
    (key) => axios(JSON.parse(key)),
    config
  )
}

const path = ref('/article/test')

export const useHttpConfig = () => {
  return computed(() => {
    return {
      method: 'get',
      url: `http://localhost:9000/api${path.value}`
    } as AxiosRequestConfig
  })
}

type HttpDataKey = ReturnType<typeof useHttpConfig>
export const httpSymbol: InjectionKey<HttpDataKey> = Symbol()

export function useHttpData() {
  const reqConf = inject(httpSymbol)
  if (!reqConf) {
    throw new Error('useHttpData() is called without provider')
  }
  return {
    reqConf,
    path: path
  }
}
