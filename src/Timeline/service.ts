import { Repository } from './types'

export const getRepo = async (): Promise<Repository[]> => {
  return [
    {
      name: 'Cache Simulator',
      language: 'C',
      description:
        'Cache Simulator for Computer Architecture and Organization Course 2190250',
      publishedDate: '2019-04-23T14:59:17Z'
    },
    {
      name: 'My Project',
      language: 'Kotlin',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    },
    {
      name: 'My Project',
      language: 'Vue',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    },
    {
      name: 'My Project',
      language: 'TypeScript',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    },
    {
      name: 'My Project',
      language: 'JavaScript',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    },
    {
      name: 'My Project',
      language: 'Java',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    },
    {
      name: 'My Project',
      language: 'Python',
      description: 'Some description here. Lorem ipsum.',
      publishedDate: 'last year'
    }
  ]
}
