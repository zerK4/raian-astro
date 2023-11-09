import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  const form = useRef();
  const [sent, setSent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [completeError, setCompleteError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && phone && date) {
      setIsLoading(true);
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setType("");
      emailjs
        .sendForm(
          "service_uuk68tl",
          "template_c7rd43f",
          form.current,
          "6-MZbtZGGmjQiqKg-"
        )
        .then(
          (result) => {
            setIsLoading(false);
            setSent("sent");
            console.log(result);
            setIsLoading(false);
            setTimeout(() => {
              setSent("");
            }, 3000);
          },
          (error) => {
            setIsLoading(false);
            setSent("error");
            console.log(error);
            setIsLoading(false);
          }
        );
    }
    !email
      ? setCompleteError("Email")
      : !name
      ? setCompleteError("Nume")
      : !date
      ? setCompleteError("Data")
      : !type
      ? setCompleteError("Tipul evenimentului")
      : !phone
      ? setCompleteError("Telefon")
      : setCompleteError("");
    setSent("");
  };
  const year = new Date().getFullYear();
  return (
    <div className='footer flex h-fit items-center justify-center bg-neutral-900 py-10 text-neutral-300'>
      <div className='flex w-full flex-col items-center justify-between gap-10 px-6 sm:flex-row '>
        <div className='flex w-[60%] flex-col items-start gap-10'>
          <div className='flex w-full items-start justify-start md:w-[60%]'>
            <div className='flex h-fit w-[80%] flex-col gap-2 text-sm'>
              <a href='/'>
                <button className='link relative'>Home</button>
              </a>
              <a href='/photo'>
                <button className='link relative'>Galerie Foto</button>
              </a>
              <a href='/video'>
                <button className='link relative'>Galerie Video</button>
              </a>
              <a href='/desc'>
                <button className='link relative'>Blog</button>
              </a>
              <a href='/offer'>
                <button className='link relative'>Oferta</button>
              </a>
            </div>

            {/* <div className='flex w-[50%] flex-col items-end gap-2 sm:items-center'>
              <a href='https://www.facebook.com/raianvisual'>
                <button className=''>
                  <AiFillFacebook className='movement text-3xl hover:text-[#C78665]' />
                </button>
              </a>
              <a href='https://www.instagram.com/raianvisual/'>
                <button className=''>
                  <AiFillInstagram className='movement text-3xl hover:text-[#C78665]' />
                </button>
              </a>
              <a href='https://www.youtube.com/channel/UCggJuYrzABVg4Th0BplYvdg'>
                <button className=''>
                  <AiFillYoutube className='movement text-3xl hover:text-[#C78665]' />
                </button>
              </a>
            </div> */}
          </div>

          <div className='flex items-center justify-center gap-2 bg-white'>
            <iframe
              src='https://www.fearlessphotographers.com/banner-display.cfm?photogID=2006'
              className='w-40'
            />
          </div>
        </div>

        <form
          ref={form}
          className='flex w-full flex-col gap-2 sm:w-[50%]'
          id='contact'
        >
          <div className='flex flex-col'>
            <label>E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              type='email'
              className='movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]'
              placeholder='email@email.com'
            />
          </div>
          <div className='flex flex-col'>
            <label>Nume</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name='name'
              type='text'
              className='movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]'
              placeholder='Nume, Prenume'
            />
          </div>
          <div className='flex flex-col'>
            <label>Data</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              name='date'
              type='date'
              className='movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]'
              placeholder='Alegeti data'
            />
          </div>
          <div className='flex flex-col'>
            <label>Tipul evenimentului</label>
            <input
              onChange={(e) => setType(e.target.value)}
              value={type}
              name='type'
              type='text'
              className='movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]'
              placeholder='Nunta, botez, etc.'
            />
          </div>
          <div className='flex flex-col'>
            <label>Telefon</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name='phone'
              type='text'
              className='movement h-[2.5rem] rounded-md border-2 border-neutral-800 bg-neutral-800 px-2 outline-none placeholder:text-sm focus:border-[#C78665]'
              placeholder='0000 000 000'
            />
          </div>
          <button
            onClick={(e) => sendEmail(e)}
            type='submit'
            className={`movement flex h-[2.5rem] items-center justify-center rounded-md bg-[#C78665] text-white hover:opacity-100 ${
              completeError !== ""
                ? "font-semibold text-red-500 opacity-100"
                : "font-normal text-white opacity-50"
            }`}
          >
            {isLoading ? (
              <div className='loader h-6 w-6 border-[2px]'></div>
            ) : sent ? (
              "Mesaj trimis!"
            ) : completeError !== "" ? (
              `Completeaza ${completeError}`
            ) : (
              "Trimite"
            )}
          </button>
        </form>
      </div>
      <div className='absolute bottom-2 w-full text-center'>
        &copy; Raian Visual 2018-{year}
      </div>
    </div>
  );
}
