<script>
  import { onMount } from "svelte";
  import { lazyLoad } from "../utils";
  import ImageGallery from "@react2svelte/image-gallery";
  import { convertCompilerOptionsFromJson } from "typescript";
  import { caretRight } from "./icons";
  export let clicking;
  export let filteredImages;
  export let dynamicGallery;
  export let imageId;
  let el;
  $: idImage = imageId + 1;
  onMount(() => {
    document.body.style.overflow = "hidden";
  });

  const handleSwitch = (id) => {
    idImage = id;
  };
</script>

<div
  class="h-screen w-screen fixed left-0 top-0 bg-black-30 backdrop-blur-sm z-50"
>
  <button
    on:click={clicking}
    class="absolute top-2 right-2 p-2 bg-orange-400 z-50">Close</button
  >
  {#if filteredImages}
    <div class="absolute top-0 left-0 h-screen bg-black/10 w-full">
      {#each filteredImages as image, i (i)}
        <img
          src={`/images${filteredImages[idImage].img}`}
          alt={filteredImages[idImage].name}
          class="h-screen w-screen object-contain"
        />
      {/each}
      <button
        on:click={() => handleSwitch(idImage + 1)}
        class="h-screen top-0 right-0 w-20 flex justify-center items-center z-40 absolute text-orange-400"
        ><span class="p-2 bg-black rounded-full border border-neutral-500">
          {@html caretRight}</span
        ></button
      >
      <button
        on:click={() => handleSwitch(idImage - 1)}
        class="h-screen top-0 left-0 w-20 flex justify-center items-center z-40 absolute text-orange-400 rotate-180"
        ><span class="p-2 bg-black rounded-full border border-neutral-500">
          {@html caretRight}</span
        ></button
      >
    </div>
  {/if}
</div>
