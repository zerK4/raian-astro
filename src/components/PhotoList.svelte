<script>
  import { lazyLoad } from "../utils/index";
  import data from "../data/images.json";
  import { onMount } from "svelte";
  import DynamicGallery from "./DynamicGallery.svelte";

  let url;
  let size = 20;
  let filteredImages = [];
  $: dynamicGallery = false;
  let imageId;

  onMount(() => {
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

  const handleAssign = (id) => {
    dynamicGallery = true;
    imageId = id;
  };
</script>

<div
  class={`${
    filteredImages.length !== 0
      ? "md:grid-gallery"
      : "flex justify-center items-center my-6"
  }`}
>
  {#if filteredImages.length !== 0}
    {#each filteredImages.slice(1, size) as image}
      <figure class="group/img relative overflow-hidden">
        <img
          use:lazyLoad={`/raian-astro/images${image.img}`}
          alt={image.name}
          class="hover:opactiy-30"
        />
        <button
          on:click={() => handleAssign(image.id)}
          class="group-hover/img:h-full group-hover/img:w-full rounded-full cursor-pointer group-hover/img:rounded-none h-10 w-10 group-hover/img:bg-black/10 group-hover/img:backdrop-blur-sm top-0 left-0 right-0 bottom-0 mx-auto my-auto movement absolute"
        />
      </figure>
    {/each}
  {:else}
    <div class="">
      <div class="loader" />
    </div>
  {/if}
</div>
{#if filteredImages.length > size}
  <div class="w-full flex items-center justify-center mt-1">
    <button on:click={handleLoad} class="w-[90%] bg p-2 rounded-md"
      >Incarca mai multe</button
    >
  </div>
{/if}

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
    @apply object-cover;
  }
</style>
