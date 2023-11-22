<script lang="ts">
  import { marked } from "marked";
  export let blog;

  const { content } = blog;

  console.log(blog, "the blog FE");
</script>

<div class=" text-white">
  {@html marked(content)}
</div>
