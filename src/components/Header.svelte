<script lang="ts">
  import { onMount } from "svelte";
  import { arrowRight, closeBu, hamMenu } from "./icons";

  const navItems = [
    {
      name: "Acasă",
      link: `/`,
    },
    {
      name: "Galerie Foto",
      link: `/photo`,
    },
    {
      name: "Galerie Video",
      link: `/video`,
    },
    {
      name: "Oferte",
      link: `/oferte`,
    },
    {
      name: "Politică",
      link: `/politica`,
    },
    {
      name: "Servicii",
      link: `/servicii`,
    },
  ];

  let scrolling = false;
  let navActive = false;

  const navHandler = () => {
    navActive = !navActive;

    navActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  onMount(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 250) {
        scrolling = true;
      } else {
        scrolling = false;
      }
    });
  });
</script>

<div
  class={`${
    scrolling === true ? "h-14 z-40" : "h-[7rem]"
  } w-full fixed bg-black/30 backdrop-blur-md px-2 text-white movement z-50`}
>
  <div
    class="flex items-center justify-between mx-auto w-full lg:w-[90%] xl:w-[70%] h-full"
  >
    <div class="logo">
      <h1 class="font-flower text-3xl">Foto Video by Raian Visual</h1>
    </div>
    <button class="md:hidden flex p-2" on:click={navHandler}>
      {@html hamMenu}
    </button>

    <div
      class={`${
        navActive
          ? "translate-y-0 bg-black/90 flex flex-col justify-end h-screen backdrop-blur-sm"
          : "-translate-y-[300vw] md:translate-y-0 bg-transparent"
      } fixed items-start pt-20 md:pt-0 md:px-10 z-40 movement h-screen left-0 top-0 flex-col md:flex-row w-screen md:w-auto gap-6 md:relative flex md:items-center md:gap-6 md:h-full`}
    >


      <button
        on:click={navHandler}
        class="md:hidden flex absolute top-4 right-4 hover:opacity-50 movement border-2 p-2 border-[#C78665] text-[#C78665] rounded-full"
      >
        {@html closeBu}
      </button>


      <div
        class="flex flex-col w-full md:w-fit pb-80 md:pb-80 md:flex-row items-end md:items-center gap-4 md:gap-4">
        {#each navItems as item, i}
          <a href={item.link} class="flex items-center md:link group/navItem">
            <span
              class="group-hover/navItem:-translate-x-6 group-hover/navItem:opacity-50 md:group-hover/navItem:translate-x-0 md:group-hover/navItem:-translate-y-2 movement"
            >
              {item.name}
            </span>
            <span
              class="md:hidden movement group-hover/navItem:-translate-x-6 rotate-180 translate-x-[100vw] text-[#C78665]"
            >
              {@html arrowRight}
            </span>
          </a>
        {/each}
      </div>

      
    </div>
  </div>
</div>
