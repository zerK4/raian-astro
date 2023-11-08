<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import SwiperCore, {
    Mousewheel,
    Pagination,
    Navigation,
    Scrollbar,
    A11y,
  } from "swiper";
  import "swiper/css";
  import "swiper/css/pagination";
  import { lazyLoad } from "../utils";

  export let filteredImages;

  SwiperCore.use([Mousewheel, Pagination]);
</script>

<Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  on:slideChange={() => console.log("slide change")}
  on:swiper={(e) => console.log(e.detail[0])}
>
  {#each filteredImages as image}
    <SwiperSlide>
      <img
        use:lazyLoad={`/images${image.img}`}
        alt={image.name}
        class="h-36 object-cover"
        id={`image-${image.id}`}
      />
    </SwiperSlide>
  {/each}
</Swiper>
