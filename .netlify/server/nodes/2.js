

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fdc18a48.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js","_app/immutable/chunks/BlogTitle.13fa0518.js"];
export const stylesheets = ["_app/immutable/assets/BlogTitle.3a7520d1.css"];
export const fonts = [];
