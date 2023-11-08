<script>
  import { onMount } from "svelte";
  import { lazyLoad } from "../utils";
  import { Swiper } from "swiper";
  import "swiper/css";
  export let clicking;
  export let filteredImages;
  export let dynamicGallery;
  export let imageId;
  let el;

  onMount(() => {
    document.body.style.overflow = "hidden";
    console.log(filteredImages, imageId, "the data");
    el = document.querySelector(`#image-${imageId}`);

    console.log(el, "the element");

    setTimeout(() => {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 400);

    const swiper = new Swiper(".imgSwiper", {
      loop: true,

      speed: 700,
    });
  });
</script>

<div
  class="h-screen w-screen fixed left-0 top-0 bg-black-30 backdrop-blur-sm z-50"
>
  <button on:click={clicking} class="absolute top-2 right-2 p-2 bg-orange-400"
    >Close</button
  >
  <div
    class={`${
      dynamicGallery ? "translate-y-0" : "translate-y-[30rem]"
    } flex gap-2 movement overflow-scroll absolute bottom-2 left-0 sm:left-2 md:left-10`}
  >
    <div class="swiper imgSwiper">
      <div class="swiper-wrapper">
        {#each filteredImages as image}
          <div class="swiper-slide">
            <img
              use:lazyLoad={`/images${image.img}`}
              alt={image.name}
              class="h-36 object-cover"
              id={`image-${image.id}`}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
