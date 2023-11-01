import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { B as BlogTitle } from "../../chunks/BlogTitle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-4p3d56">Welcome</h1> <p data-svelte-h="svelte-17gfkvi">This is my Homepage/Playground. I&#39;m just gonna put a bunch of stuff here. This
	site was made with <a href="https://kit.svelte.dev/">SvelteKit</a>. I&#39;m by no
	means a Svelte Guru but it&#39;s a framework I quite enjoy because of how simple
	it can be to use if you chose not to do anything too crazy with it. It&#39;s
	basically just <b>HTML</b> and <b>CSS</b> with some extra features at its very
	simplest.</p> <p data-svelte-h="svelte-vhj1f9">I&#39;m gonna use this as a sort of <b>blog</b> for myself and I&#39;m also gonna be
	linking to some friends in the <a href="/friends">friends</a> section of this page.
	It&#39;s other people that have recently (as of October 2023) been making some websites.</p> <article><h1 data-svelte-h="svelte-nm3wzl">Check out this blog post!</h1> ${validate_component(BlogTitle, "BlogTitle").$$render(
    $$result,
    {
      title: "I went on a walk",
      imgsrc: "/blogimg/231023_img/coverimg.jpg",
      bloglink: "/blog/231023",
      timestamp: "23. Oct 2023"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-1d2x1s8">I went on a 10km walk/hike. Took some pictures and enjoyed the day. You can
		read more by clicking the title or image.</p></article>`;
});
export {
  Page as default
};
