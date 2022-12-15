import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://paste-five.vercel.app/api'
})