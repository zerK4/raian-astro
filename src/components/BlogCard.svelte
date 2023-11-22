<script lang="ts">
  export let blog: any;
  const {
    id,
    attributes: {
      name,
      createdAt,
      publishedAt,
      content,
      by,
      date,
      buttonName,
      slug,
    },
  } = blog;
</script>

<div class="text-white p-2 border border-[#C78665] rounded-md w-fit">
  <h2 class="">{name}</h2>
  <a href={`/blog/${slug}`} class="">{buttonName}</a>
</div>
