import { GithubRepository, GithubProfile, SearchResult } from './types'
import axios from 'axios'
import { BehaviorSubject, from, of, merge } from 'rxjs'
import { filter, debounceTime, switchMap, pluck } from 'rxjs/operators'
import { BASE_URL } from '../config'

const getRequest = <T>(url: string) =>
  from(axios.get<T>(`${BASE_URL}/${url}`)).pipe(pluck('data'))
class Service {
  private searchUser = (input: string) =>
    input.length > 2 ? getRequest<SearchResult[]>(`/search/${input}`) : of([])

  searchInput$ = new BehaviorSubject('')

  searchResult$ = this.searchInput$.pipe(
    debounceTime(200),
    switchMap(this.searchUser)
  )

  private fetchProfile = (username: string) =>
    merge(of(undefined), getRequest<GithubProfile>(`/user/${username}`))

  private fetchRepos = (username: string) =>
    merge(
      of<GithubRepository[]>([]),
      getRequest<GithubRepository[]>(`/repo/${username}`)
    )

  private username$ = new BehaviorSubject('')

  fetchData = (username: string) => {
    this.username$.next(username)
    this.searchInput$.next('')
  }

  profile$ = this.username$.pipe(
    filter(username => username !== ''),
    switchMap(this.fetchProfile)
  )

  repos$ = this.username$.pipe(
    filter(username => username !== ''),
    switchMap(this.fetchRepos)
  )
}

export const service = new Service()
