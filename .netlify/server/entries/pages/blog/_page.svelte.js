import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogTitle } from "../../../chunks/BlogTitle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-hg21mo">This is where you&#39;ll find me posting random things</h1> <p data-svelte-h="svelte-8sdch2">I&#39;m using this page as a little blog where I&#39;m just gonna write about stuff.
	Whatever stuff I wanna write about in the moment. Could be about programming
	or about me taking a walk. Doesn&#39;t matter.</p> ${validate_component(BlogTitle, "BlogTitle").$$render(
    $$result,
    {
      title: "I went on a walk",
      imgsrc: "/blogimg/231023_img/coverimg.jpg",
      bloglink: "/blog/231023",
      timestamp: "23. Oct 2023"
    },
    {},
    {}
  )} <p data-svelte-h="svelte-11nma2b">I went on a 10km walk/hike. Took some pictures and enjoyed the day. You can
	read more by clicking the title or image.</p>`;
});
export {
  Page as default
};
