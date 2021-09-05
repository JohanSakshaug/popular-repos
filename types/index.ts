export interface Repo {
  id: number;
  description: string;
  full_name: string;
  watchers: number;
  language: string;
}

export interface RepoSearchRes {
  items: Repo[];
}
