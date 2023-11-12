<script lang="ts">
  import { checkMediaType, lazyLoad } from "../utils/index";
  import videos from "../data/videos.json";
  import images from "../data/images.json";
  import { onMount } from "svelte";
  import DynamicGallery from "./DynamicGallery.svelte";

  let url;
  let size = 20;
  let filteredImages: any = [];
  $: dynamicGallery = false;
  let imageId: string;
  let data;

  onMount(() => {
    console.log(checkMediaType(window.location.pathname), "the location");
    if (checkMediaType(window.location.pathname) === "photo") {
      data = images;
    } else if (checkMediaType(window.location.pathname) === "video") {
      data = videos;
    } else {
      data = images;
    }
    url = new URLSearchParams(window.location.search);
    const cat = url.get("cat");

    switch (cat) {
      case "toate":
        filteredImages = data;
        break;
      case "nunta":
        filteredImages = data.filter((photo) => photo.category === "wedding");
        break;
      case "evenimente":
        filteredImages = data.filter((photo) => photo.category === "event");
        break;
      case "comercial":
        filteredImages = data.filter((photo) => photo.category === "fashion");
        break;
    }
  });

  const handleLoad = () => {
    size += 20;
  };

  const handleClick = () => {
    dynamicGallery = !dynamicGallery;
    dynamicGallery === false ? (document.body.style.overflow = "auto") : "";
  };

  const handleAssign = (id: any) => {
    if (window.innerWidth < 768) {
      return;
    }
    dynamicGallery = true;
    imageId = id;
  };
</script>

<div
  class={`${
    filteredImages.length !== 0
      ? "flex flex-col sm:flex-row sm:flex-wrap mt-1 md:justify-center gap-2"
      : "flex justify-center items-center my-6"
  } min-h-[20vh]`}
>
  {#if filteredImages.length !== 0}
    {#each filteredImages as image, index}
      <figure class="group/img relative overflow-hidden min-h-[20vh]">
        {#if checkMediaType(window.location.pathname) === "photo"}
          <img
            use:lazyLoad={`/raian-astro/images${image.img}`}
            alt={image.name}
            class="hover:opactiy-30 max-h-[90vh]"
          />
        {:else if checkMediaType(window.location.pathname) === "video"}
          <iframe
            width="100%"
            height="100%"
            use:lazyLoad={image}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen={true}
          />
        {:else}
          <img
            use:lazyLoad={`/raian-astro/images${image.img}`}
            alt={image.name}
            class="hover:opactiy-30 max-h-[90vh]"
          />
        {/if}
      </figure>
      <button
        on:click={() => handleAssign(index)}
        class="group-hover/img:h-full group-hover/img:w-full rounded-full cursor-pointer group-hover/img:rounded-none h-10 w-10 group-hover/img:bg-black/10 group-hover/img:backdrop-blur-sm top-0 left-0 right-0 bottom-0 mx-auto my-auto movement absolute"
      />
    {/each}
  {:else}
    <div class="">
      <div class="loader" />
    </div>
  {/if}
</div>

{#if dynamicGallery}
  <DynamicGallery
    clicking={handleClick}
    {dynamicGallery}
    {filteredImages}
    {imageId}
  />
{/if}

<style>
  img {
    opacity: 0;
    transition: all 5s ease;
    height: 100% !important;
    width: 100%;
    @apply object-cover;
  }
</style>
