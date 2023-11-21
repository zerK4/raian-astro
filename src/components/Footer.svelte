<script lang="ts">
  import { facebookIcon, instagramIcon, youtubeIcon } from "./icons";
  import { isComplete } from "../utils/index";
  import axios from "axios";
  import type { UserFormInterface } from "../types/defaults";

  let completeError: any;
  let loading: boolean = false;
  let sent: boolean = false;

  const date = new Date();
  const year = date.getFullYear();

  let user: UserFormInterface = {
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    event: "",
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (!isComplete(user)) {
      return;
    }

    try {
      loading = true;
      const data = await axios({
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        url: import.meta.env.PUBLIC_EMAIL_API,
        data: {
          data: user,
        },
      });
      console.log(data, "returning data");
      sent = true;
    } catch (err: any) {
      alert("Please complete all the fields!");
      console.log(err.message, "this is an error");
    } finally {
      loading = false;
    }
  };
</script>

<div
  class="footer flex h-fit items-center justify-center bg-neutral-900 py-10 text-neutral-300"
>
  <div
    class="flex w-full flex-col items-center justify-between gap-10 px-6 sm:flex-row"
  >
    <div class="flex w-[60%] flex-col items-start gap-10">
      <div class="flex w-full items-start justify-start md:w-[60%]">
        <div class="flex h-fit w-[80%] flex-col gap-2 text-sm">
          <a href="/">
            <button class="link relative">Home</button>
          </a>
          <a href="/photo">
            <button class="link relative">Galerie Foto</button>
          </a>
          <a href="/video">
            <button class="link relative">Galerie Video</button>
          </a>
          <a href="/desc">
            <button class="link relative">Blog</button>
          </a>
          <a href="/offer">
            <button class="link relative">Oferta</button>
          </a>
        </div>

        <div class="flex w-[50%] flex-col items-end gap-2 sm:items-center">
          <a href="https://www.facebook.com/raianvisual">
            <button class="">
              <span class="movement text-3xl hover:text-[#C78665]"
                >{@html facebookIcon}</span
              >
            </button>
          </a>
          <a href="https://www.instagram.com/raianvisual/">
            <button class="">
              <span class="movement text-3xl hover:text-[#C78665]"
                >{@html instagramIcon}</span
              >
            </button>
          </a>
          <a href="https://www.youtube.com/channel/UCggJuYrzABVg4Th0BplYvdg">
            <button class="">
              <span class="movement text-3xl hover:text-[#C78665]"
                >{@html youtubeIcon}</span
              >
            </button>
          </a>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2 bg-white">
        <iframe
          title="Raian visual on fearless photographers."
          src="https://www.fearlessphotographers.com/banner-display.cfm?photogID=2006"
          class="w-40"
        />
      </div>
    </div>

    <form class="flex w-full flex-col gap-2 sm:w-[50%]" id="contact">
      <label class="flex flex-col"
        >E-mail
        <input
          bind:value={user.email}
          name="email"
          type="email"
          class="movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="email@email.com"
        />
      </label>
      <label class="flex flex-col"
        >Nume
        <input
          bind:value={user.name}
          name="name"
          type="text"
          class="movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="Nume, Prenume"
        />
      </label>
      <label class="flex flex-col">
        Data
        <input
          bind:value={user.date}
          name="date"
          type="date"
          class="movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="Alegeti data"
        />
      </label>
      <label class="flex flex-col">
        Tipul evenimentului
        <input
          bind:value={user.event}
          name="type"
          type="text"
          class="movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="Nunta, botez, etc."
        />
      </label>
      <label class="flex flex-col">
        Telefon
        <input
          bind:value={user.phone}
          name="phone"
          type="text"
          class="movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="0000 000 000"
        />
      </label>
      <label class="flex flex-col">
        Mesaj
        <textarea
          bind:value={user.message}
          name="message"
          class="movement rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]"
          placeholder="Introdu mesajul tau"
        />
      </label>
      <button
        on:click={(e) => sendEmail(e)}
        type="submit"
        class={`movement flex h-[2.5rem] items-center justify-center rounded-md bg-[#C78665] text-white hover:opacity-100 ${
          completeError !== ""
            ? "font-semibold text-red-500 opacity-100"
            : "font-normal text-white opacity-50"
        }`}
      >
        {#if loading}
          <span class="loader h-6 w-6 border-[2px]" />
        {:else if sent}
          <span class="">Mesaj trimis!</span>
        {:else}
          <span class="">Trimite</span>
        {/if}
      </button>
    </form>
  </div>
  <div class="absolute bottom-2 w-full text-center">
    &copy; Raian Visual 2018-{year}
  </div>
</div>
