

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5f09dc23.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.81cde385.js","_app/immutable/chunks/singletons.147f2eec.js"];
export const stylesheets = [];
export const fonts = [];
