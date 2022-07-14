import axios from 'axios'
import { constants } from '../constants/env-conf'

const server = constants.SOPA_API;
const authHeader = (): any => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  }
}

export const getApi = async (url: string, auth: boolean) => {
  try {
    const res = await axios.get(server + url, auth ? authHeader() : {})
    return res.data
  } catch (e: any) {
    return e.response.data
  }
}

export const postApi = async (url: string, data: any, auth: boolean) => {
  try {
    const res = await axios.post(server + url, data, auth ? authHeader() : {})
    return res.data
  } catch (e: any) {
    return e.response.data
  }
}
export const putApi = async (url: string, data: any, auth: boolean) => {
  try {
    const res = await axios.put(server + url, data, auth ? authHeader() : {})
    return res.data
  } catch (e: any) {
    return e.response.data
  }
}

export const deleteApi = async (url: string, auth: boolean) => {
  try {
    const res = await axios.delete(server + url, auth ? authHeader() : {})
    return res.data
  } catch (e: any) {
    return e.response.data
  }
}