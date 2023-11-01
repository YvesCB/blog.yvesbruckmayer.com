

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dfaeecbd.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js"];
export const stylesheets = ["_app/immutable/assets/0.334e974d.css"];
export const fonts = [];
