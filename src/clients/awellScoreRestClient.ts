import axios from 'axios'

const awellScoreRestClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SCORE_API_URL,
})

export default awellScoreRestClient
