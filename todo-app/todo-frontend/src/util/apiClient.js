import axios from 'axios'
const VITE_BACKEND_URL = "http://localhost:32769"
const apiClient = axios.create({
  baseURL: VITE_BACKEND_URL,
})

export default apiClient