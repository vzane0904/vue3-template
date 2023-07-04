import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'

export class VAxios {
  private AxiosInstance: AxiosInstance
  constructor() {
    this.AxiosInstance = axios.create({})
    this.interceptors() //this.AxiosInstance
  }
  //   拦截器axiosInstance: AxiosInstance
  private interceptors() {
    this.initRequestInterceptors()
    this.initResponseInterceptors()
  }
  //   请求拦截器
  private initRequestInterceptors() {
    this.AxiosInstance.interceptors.request.use(
      async request => request,
      async (error: AxiosError) => Promise.reject(error)
    )
  }
  //   响应拦截器
  private initResponseInterceptors() {
    this.AxiosInstance.interceptors.response.use(
      async (response: AxiosResponse) => response.data,
      async (error: AxiosError) => Promise.reject(error)
    )
  }
  /**
   * @description 请求主体
   **/
  require<T = any>(config: AxiosRequestConfig<any>): Promise<T> {
    return this.AxiosInstance.request({
      ...config
    })
  }
}
const createHttp = () => new VAxios()
export const http = createHttp()
