import { GithubRepository, GithubProfile } from './types'
import axios from 'axios'
export const getRepo = async (
  username: string
): Promise<GithubRepository[]> => {
  const { data } = await axios.get<GithubRepository[]>(
    `http://localhost:8083/repo/${username}`
  )
  return data
}

export const getProfile = async (username: string): Promise<GithubProfile> => {
  const { data } = await axios.get<GithubProfile>(
    `http://localhost:8083/user/${username}`
  )
  return data
}
