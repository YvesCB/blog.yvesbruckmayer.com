

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8eda5205.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js","_app/immutable/chunks/BlogTitle.13fa0518.js"];
export const stylesheets = ["_app/immutable/assets/BlogTitle.3a7520d1.css"];
export const fonts = [];
