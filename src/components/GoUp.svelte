<script lang="ts">
  import { onMount } from "svelte";
  import { goUp } from "./icons";

  let shouldShow: boolean = false;

  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  onMount(() => {
    window.addEventListener("scroll", () => {
      shouldShow = window.scrollY > 100 ? true : false;
    });
  });
</script>

{#if shouldShow}
  <button
    on:click={handleScroll}
    class="fixed bottom-2 right-2 z-50 bg-[#C78665] h-10 w-10 border border-black/20 hover:-translate-y-2 movement rounded-full flex items-center justify-center"
    >{@html goUp}</button
  >
{/if}
<div class="" />
