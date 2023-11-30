<script>
  import { onMount } from "svelte";

  const catLinks = [
    {
      name: "Toate",
      id: "toate",
    },
    {
      name: "Nuntă",
      id: "nunta",
    },
    {
      name: "Comercială",
      id: "comercial",
    },
  ];
  let cat;
  let url;

  const handleLink = (e, id) => {
    e.preventDefault();
    url.searchParams.set("cat", id);
    window.location.replace(url.href);
    console.log(url.href, id, url, "the data");
  };

  onMount(() => {
    url = new URL(window.location.href);

    const su = new URLSearchParams(window.location.search);
    cat = su.get("cat");

    if (!cat) {
      url.searchParams.set("cat", "toate");
      window.location.replace(url.href);
      cat = "toate";
    }
  });
</script>

<div class="relative h-[35vh]">
  <img
    src={`/assets/hero1.jpg`}
    alt="hero"
    class="h-[35vh] w-screen object-cover"
  />
  <div
    class="absolute bottom-0 text-white w-full flex justify-center h-20 items-center gap-4"
  >
    {#each catLinks as { name, id }}
      <button
        on:click={(e) => handleLink(e, id)}
        class={`movement md:font-semibold md:text-xl hover:-translate-y-2 ${
          cat === id ? "text-orange-400 -translate-y-2" : ""
        }`}>{name}</button
      >
    {/each}
  </div>
</div>
