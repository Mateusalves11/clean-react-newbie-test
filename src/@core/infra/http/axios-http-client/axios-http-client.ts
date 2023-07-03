import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '@/@core/data/protocols/http'

/**
 * Está classe usa Adapter Pattern para fazer a interface
 * do HttpClient e do Axios para não deixar nosso sistema
 * dependente do axios
 */
export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: data.headers,
        withCredentials: data.withCredentials || false
      })
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data
    }
  }
}
