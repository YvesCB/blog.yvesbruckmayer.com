

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/friends/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.cea89a6c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js"];
export const stylesheets = [];
export const fonts = [];
