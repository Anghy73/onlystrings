export interface Note {
  readonly id?: number
  title: string
  content?: string
  createdAt?: string
}

export interface User {
  id: number
  name: string
  email: string,
  notes: string,
  token: string
}