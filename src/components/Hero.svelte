<script>
  import { caretRight } from "./icons";
</script>

<div class="w-full flex items-center justify-center">
  <div
    class="h-[100%] w-full flex justify-center items-center bg-whiterounded-full"
  >
    <img
      src={`/raian-astro/assets/hero1.jpg`}
      class="h-screen w-screen object-cover"
      alt="Hero"
    />
    <div
      class="flex absolute custom-circle opacity-80 backdrop-blur-md flex-col items-center justify-center gap-2 bg-[#C78665] md:h-[35rem] md:w-[35rem] sm:h-[24rem] sm:w-[24rem] h-[19rem] w-[19rem] rounded-full"
    >
      <h1 class="sm:text-[4rem] text-[3rem] font-flower">Raian Visual</h1>
      <div class="group/bh flex gap-2 items-center z-30">
        <a href={`/raian-astro/photo`}>
          <button class=""> Hai să vezi portofoliul! </button>
        </a>
        <span
          class={`
              group-hover/bh:translate-x-6
            movement text-[#ffdd00] opacity-80 h-fit`}
        >
          {@html caretRight}
        </span>
      </div>
      <div>
        <a href="/offer">
          <button class=""> Calendar disponibil! </button>
        </a>
      </div>
    </div>
  </div>
</div>
