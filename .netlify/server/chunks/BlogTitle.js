import { c as create_ssr_component, d as add_attribute, e as escape } from "./ssr.js";
const BlogTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".thumbnail.svelte-10qy9yt.svelte-10qy9yt{height:20rem;width:100%;object-fit:cover;border-radius:1rem;transition:transform 0.2s ease}.thumbnail.svelte-10qy9yt.svelte-10qy9yt:hover{transform:scale(1.01)}h2.svelte-10qy9yt.svelte-10qy9yt,.blog-post.svelte-10qy9yt p.svelte-10qy9yt{margin:0.8rem 0}.blog-post.svelte-10qy9yt.svelte-10qy9yt{display:flex;justify-content:space-between;align-items:end}",
  map: null
};
const BlogTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { imgsrc } = $$props;
  let { bloglink } = $$props;
  let { timestamp } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0)
    $$bindings.imgsrc(imgsrc);
  if ($$props.bloglink === void 0 && $$bindings.bloglink && bloglink !== void 0)
    $$bindings.bloglink(bloglink);
  if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0)
    $$bindings.timestamp(timestamp);
  $$result.css.add(css);
  return `<div class="blog-post svelte-10qy9yt"><h2 class="svelte-10qy9yt"><a${add_attribute("href", bloglink, 0)}>${escape(title)}</a></h2> <p class="timestamp svelte-10qy9yt">${escape(timestamp)}</p></div> <a href="blog/231023"><img${add_attribute("src", imgsrc, 0)} alt="img not found" class="landscape thumbnail svelte-10qy9yt"> </a>`;
});
export {
  BlogTitle as B
};
