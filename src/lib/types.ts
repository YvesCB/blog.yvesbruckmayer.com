export type Categories = 'dev' | 'nvim' | 'svelte' | 'irl' | 'hiking'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	coverimg: string
	published: boolean
}
