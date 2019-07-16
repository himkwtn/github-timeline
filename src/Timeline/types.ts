export interface GithubRepository {
  name: string
  language: string
  description: string
  publishedDate: string
  url: string
}
interface Organization {
  avatar: string
  url: string
}
export interface GithubProfile {
  name: string
  username: string
  avatar: string
  url: string
  bio: string
  orgs: Organization[]
}
