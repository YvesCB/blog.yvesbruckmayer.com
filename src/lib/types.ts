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

export type Friend = {
	name: string
	url: string
	imgsrc: string
}
