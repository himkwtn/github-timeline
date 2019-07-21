import { GithubRepository, GithubProfile } from './types'
import axios from 'axios'
import { BehaviorSubject } from 'rxjs'

class Service {
  profile$ = new BehaviorSubject<GithubProfile | undefined>(undefined)
  repos$ = new BehaviorSubject<GithubRepository[]>([])

  fetchProfile = async (username: string) => {
    const { data } = await axios.get<GithubProfile>(
      `http://localhost:8083/user/${username}`
    )
    this.profile$.next(data)
  }

  fetchRepos = async (username: string) => {
    const { data } = await axios.get<GithubRepository[]>(
      `http://localhost:8083/repo/${username}`
    )
    this.repos$.next(data)
  }
}

export const service = new Service()
