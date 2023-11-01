import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blogimg/231023_img/arrowsign.jpg","blogimg/231023_img/coverimg.jpg","blogimg/231023_img/fieldpath.jpg","blogimg/231023_img/lunch.jpg","blogimg/231023_img/sign.jpg","blogimg/231023_img/treemarking.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.776ad4f4.js","app":"_app/immutable/entry/app.43155764.js","imports":["_app/immutable/entry/start.776ad4f4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.147f2eec.js","_app/immutable/entry/app.43155764.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/231023",
				pattern: /^\/blog\/231023\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/friends",
				pattern: /^\/friends\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
