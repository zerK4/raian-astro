import { useState, useRef } from "react";
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
          (result: any) => {
            setIsLoading(false);
            setSent("sent");
            console.log(result);
            setIsLoading(false);
            setTimeout(() => {
              setSent("");
            }, 3000);
          },
          (error: any) => {
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
    <div className='h-fit py-10 mt-10 text-neutral-300 flex justify-center items-center footer bg-neutral-900'>
      <div className='flex justify-between sm:flex-row flex-col gap-10 items-center lg:w-[60%] px-6 w-full '>
        <div className='flex items-center sm:justify-start w-[60%]'>
          <div className='flex flex-col h-fit gap-2 items-start text-sm w-[50%]'>
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
              <button className='link relative'>Blog I</button>
            </a>
            <a href='/blog'>
              <button className='link relative'>Blog II</button>
            </a>
            <a href='/offer'>
              <button className='link relative'>Oferte</button>
            </a>
            <a href='/policy'>
              <button className='link relative'>Policy</button>
            </a>
            <a href='/service'>
              <button className='link relative'>Servicii</button>
            </a>
          </div>

          <div className='flex flex-col gap-2 items-end sm:items-center w-[50%]'>
            {/* <a href='https://www.facebook.com/raianvisual'>
              <button className=''>
                <AiFillFacebook className='text-3xl hover:text-[#C78665] movement' />
              </button>
            </a>
            <a href='https://www.instagram.com/raianvisual/'>
              <button className=''>
                <AiFillInstagram className='text-3xl hover:text-[#C78665] movement' />
              </button>
            </a>
            <a href='https://youtube.com/@raianvisual2041'>
              <button className=''>
                <AiFillYoutube className='text-3xl hover:text-[#C78665] movement' />
              </button>
            </a> */}
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center'>
          <iframe
            src='https://www.fearlessphotographers.com/banner-display.cfm?photogID=2006'
            scrolling='no'
            frameBorder='0'
            style={{
              border: "1px solid #ccc",
              overflow: "hidden",
              width: "148px",
              height: "148px",
            }}
          />
        </div>

        <form
          ref={form}
          className='flex flex-col gap-2 w-full sm:w-[50%]'
          id='contact'
        >
          <div className='flex flex-col'>
            <label>E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              type='email'
              className='h-[2.5rem] rounded-md outline-none focus:border-[#C78665] border-2 border-neutral-800 px-2 movement bg-neutral-800 placeholder:text-sm'
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
              className='h-[2.5rem] rounded-md outline-none focus:border-[#C78665] border-2 border-neutral-800 px-2 movement bg-neutral-800 placeholder:text-sm'
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
              className='h-[2.5rem] rounded-md outline-none focus:border-[#C78665] border-2 border-neutral-800 px-2 movement bg-neutral-800 placeholder:text-sm'
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
              className='h-[2.5rem] rounded-md outline-none focus:border-[#C78665] border-2 border-neutral-800 px-2 movement bg-neutral-800 placeholder:text-sm'
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
              className='h-[2.5rem] rounded-md outline-none focus:border-[#C78665] border-2 border-neutral-800 px-2 movement bg-neutral-800 placeholder:text-sm'
              placeholder='0000 000 000'
            />
          </div>
          <button
            onClick={(e) => sendEmail(e)}
            type='submit'
            className={`h-[2.5rem] bg-[#C78665] flex items-center justify-center rounded-md text-white hover:opacity-100 movement ${
              completeError !== ""
                ? "text-red-500 font-semibold opacity-100"
                : "text-white font-normal opacity-50"
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
        &copy; Raian Visual {year}
      </div>
    </div>
  );
}
