import { GithubRepository, GithubProfile, SearchResult } from './types'
import axios, { AxiosResponse } from 'axios'
import { BehaviorSubject, from, forkJoin, Observable, of } from 'rxjs'
import { flatMap, map, filter, debounceTime, switchMap } from 'rxjs/operators'
import { BASE_URL } from '../config'

const extractData = <T>(result: Observable<AxiosResponse<T>>) =>
  map<AxiosResponse<T>, T>(({ data }) => data)(result)
class Service {
  private searchUser = (input: string) =>
    input.length > 2
      ? from(axios.get<SearchResult[]>(`${BASE_URL}/search/${input}`)).pipe(
          extractData
        )
      : of<SearchResult[]>([])

  searchInput$ = new BehaviorSubject('')

  searchResult$ = this.searchInput$.pipe(
    debounceTime(200),
    switchMap(this.searchUser)
  )

  private fetchProfile = (username: string) =>
    from(axios.get<GithubProfile>(`${BASE_URL}/user/${username}`)).pipe(
      extractData
    )

  private fetchRepos = (username: string) =>
    from(axios.get<GithubRepository[]>(`${BASE_URL}/repo/${username}`)).pipe(
      extractData
    )

  private username$ = new BehaviorSubject('')

  fetchData = (username: string) => {
    this.username$.next(username)
    this.searchInput$.next('')
  }

  data$ = this.username$.pipe(
    filter(username => username !== ''),
    flatMap(username =>
      forkJoin({
        profile: this.fetchProfile(username),
        repos: this.fetchRepos(username)
      })
    )
  )
}

export const service = new Service()
