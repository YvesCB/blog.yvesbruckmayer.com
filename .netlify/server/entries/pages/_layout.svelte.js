import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const MyFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer data-svelte-h="svelte-10bg37h"><h3>This is where the footer starts</h3> <p>We can put things in the footer if we like. Text and that. Look at how nice
		it is.</p></footer>`;
});
const MyHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hero.svelte-1d28ito{display:flex;justify-content:center;align-items:center}h1.svelte-1d28ito{font-size:4rem}nav.svelte-1d28ito{margin:auto;padding:0 1rem;margin-bottom:4rem}ul.svelte-1d28ito{display:flex;justify-content:space-around}li.svelte-1d28ito{list-style:none}a.svelte-1d28ito{text-decoration:none;color:var(--primary-accent-color);font-size:2.4rem;font-weight:bold}a.svelte-1d28ito:hover{color:var(--secondary-accent-color)}",
  map: null
};
const MyHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header data-svelte-h="svelte-1o9m59n"><div class="hero svelte-1d28ito"><h1 class="svelte-1d28ito">Yves&#39; Playground</h1></div> <nav class="svelte-1d28ito"><ul class="svelte-1d28ito"><li class="svelte-1d28ito"><a href="/" class="svelte-1d28ito">HOME</a></li> <li class="svelte-1d28ito"><a href="/blog" class="svelte-1d28ito">BLOG</a></li> <li class="svelte-1d28ito"><a href="/friends" class="svelte-1d28ito">FRIENDS</a></li></ul></nav> </header>`;
});
const ThemeSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="selector-container"><button>${escape("Light mode")}</button></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400;700;800&display=swap");*,*::before,*::after{box-sizing:border-box}:root{--background-color:#1f1f28;--font-primary-color:#dcd7ba;--font-accent-color:#e6c384;--primary-accent-color:#5c6f99;--secondary-accent-color:#455b6a;--content-width:90rem}.light-mode{--background-color:#f1f0e8;--font-primary-color:#141414;--font-accent-color:#96b6c5;--primary-accent-color:#a88a59;--secondary-accent-color:#adc4ce}body{margin:0;background-color:var(--background-color);color:var(--font-primary-color)}.content{margin:0;padding:0 1rem;font-family:"Playpen Sans", cursive}.content.svelte-z0et08{max-width:var(--content-width);margin:auto}h1,h2,h3,h4,h5,h6{color:var(--font-accent-color)}h1{font-size:3rem}h2{font-size:2.4rem}h3{font-size:2rem}a{color:var(--primary-accent-color);font-weight:bold;text-decoration:none}a:hover{color:var(--secondary-accent-color)}.blog-img{border-radius:0.5rem}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-myfwjv_START -->${$$result.title = `<title>Playground</title>`, ""}<meta name="robots" content="noindex nofollow"><meta name="description" content="Yves' Playground for experiments and things!"><!-- HEAD_svelte-myfwjv_END -->`, ""} <div class="content svelte-z0et08" id="root">${validate_component(MyHeader, "MyHeader").$$render($$result, {}, {}, {})} ${validate_component(ThemeSelector, "ThemeSelector").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(MyFooter, "MyFooter").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
