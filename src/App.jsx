import "./App.css";
import { useEffect, useRef, useState } from "react"; 
import img from "./assets/img.png";
import img1 from "./assets/img1.png"; 
import ekexeci from "./assets/ekexeci.png"; 
import church from "./assets/church.png"; 
import shampajn from "./assets/shampayn.png"; 
import paradis from "./assets/paradis.png"; 
import image1 from "./assets/image1.png";

export default function App() {   
  const [side, setSide] = useState("հարսի կողմ");
const [name, setName] = useState("");
const [attendance, setAttendance] = useState("կգանք");
const [guests, setGuests] = useState(1);
  const inviteRef = useRef(null);
  const [show, setShow] = useState(false); 

  const weddingDate = new Date("2026-09-26T00:00:00");

const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

useEffect(() => { 
  const timer = setInterval(() => {
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(timer);
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.25 }
    );

    if (inviteRef.current) {
      observer.observe(inviteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <h1 className="title">Հարսանյաց Հրավեր</h1>

       
      </div>

      {/* INVITE */}
      <div ref={inviteRef} className={`invite ${show ? "show" : ""}`}>
        <h2>Բարեկամներ և ընկերներ</h2>

        <p>
          Մենք գտել ենք մեր հավերժական սերը և ուրախ կլինենք, <br />
          եթե կիսեք մեզ հետ մեր լուսավոր օրը։
        </p>

        <h3>Սիրով հրավիրում ենք Ձեզ մեր</h3>
        <h3>Հարսանիքին</h3> 
         <h2 className="month">Սեպտեմբեր</h2>

        <div className="weekdays">
          <span>Երկ</span>
          <span>Երք</span>
          <span>Չրք</span>
          <span>Հնգ</span>
          <span>Ուրբ</span>
          <span>Շբթ</span>
          <span>Կիր</span>
        </div>

        <div className="dates"> 
           <span>21</span> 
            <span>22</span> 
             <span>23</span>
          <span>24</span>
          <span>25</span>
          <span className="active">26</span>
          <span>27</span>
        </div> 

       <div className="gallery">
  <img src={img} alt="img1" />
  <img src={img1} alt="img2" />
</div>
      </div>
      <div className="program">
  <h2>Օրվա ծրագիր</h2>  
   
   <div className="program-block">
   <div className="block"> <h3>Փեսայի տուն</h3>
    <p className="time">09:30</p>
    <p className="place1">
      Քաղաք Արմավիր <br />
      Փողոց Մաշտոց տուն 128
    </p>

   <a
  className="location-btn"
  href="https://yandex.com/maps/?text=Քաղաք%20Արմավիր%20Փողոց%20Մաշտոց%20տուն%20128"
  target="_blank"
  rel="noreferrer"
>
  Ինչպես հասնել
</a></div>

    <h3>Հարսի տուն</h3>

  <p className="time">09:30</p>

  <p className="place1">
    Մեծամոր 
    17 շենք<br /> 2-րդ մուտք բնակարան 34
  </p>

  <a
    className="location-btn"
    href="https://yandex.com/maps/?text=Մեծամոր%2017%20շենք"
    target="_blank"
    rel="noreferrer"
  >
    Ինչպես հասնել
  </a>
  </div>


  <img src={ekexeci} alt="ekexeci" className="church" />

  <h3>Պսակադրություն</h3>
  <p className="time">12:00</p>
  <p className="place">Սուրբ Հռիփսիմե եկեղեցի</p> 
  <img src={church} alt="church" className="church-img" /> 
  <a
  className="location-btn"
  href="https://yandex.com/maps/?text=Սուրբ%20Հռիփսիմե%20եկեղեցի"
  target="_blank"
  rel="noreferrer"
>
  Ինչպես հասնել
</a> 

<img src={shampajn} alt="shampajn" className="church1" />

<h3>Հարսանյաց Հանդիսություն</h3>
<p className="time">17:30 - 18:00</p>

<p className="place">Պարադիս Հանդիսությունների Սրահ</p>

<img src={paradis} alt="paradis" className="church-img" />

<a
  className="location-btn"
  href="https://yandex.com/maps/?text=Քաղաք%20Արմավիր%20Paradise%20Hall"
  target="_blank"
  rel="noreferrer"
>
  Ինչպես հասնել
</a>
</div> 
<div className="countdown-section">
  <div className="countdown-image">
    <img src={image1} alt="wedding"/>

    <div className="countdown-overlay bottom">
      <h2>Հարսանիքին մնաց</h2>

      <div className="countdown">
        <div className="box">{timeLeft.days} <span>օր</span></div>
        <div className="sep">|</div>
        <div className="box">{timeLeft.hours} <span>ժամ</span></div>
        <div className="sep">|</div>
        <div className="box">{timeLeft.minutes} <span>րոպե</span></div>
        <div className="sep">|</div>
        <div className="box">{timeLeft.seconds} <span>վայրկյան</span></div>
      </div>
    </div>
  </div>
</div> 
<div className="rsvp">
  <h2>Հայկ և Սվետլանա</h2>

  <p className="rsvp-text">
    Սիրով հրավիրում ենք Ձեզ կիսելու մեր կյանքի ամենակարևոր օրը։
  </p>

  <p className="rsvp-note">
    Խնդրում ենք հաստատել Ձեր ներկայությունը և նշել անձերի քանակը։
  </p>
</div> 
<div className="form-wrapper">
  <div className="form-section">
    <h2>Հաստատել մասնակցությունը</h2>

    {/* Կողմ */}
    <label>Կողմ</label>
    <select value={side} onChange={(e) => setSide(e.target.value)}>
      <option value="հարսի կողմ">Հարսի կողմ</option>
      <option value="փեսայի կողմ">Փեսայի կողմ</option>
    </select>

    {/* Անուն */}
    <label>Անուն Ազգանուն</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Գրեք ձեր անունը"
    />

    {/* Գալու է */}
    <label>Ներկա լինելու եք՞</label>
    <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
      <option value="կգանք">Կգանք</option>
      <option value="չենք գա">Չենք գա</option>
    </select>

    {/* Հյուրերի քանակ */}
    <label>Հյուրերի քանակ</label>
    <input
      type="number"
      min="1"
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
    />

    {/* BUTTON */}
    <button
      className="send-btn"
      onClick={() => {
        const message = `
💌 Հարսանյաց RSVP

👤 Անուն: ${name}
👥 Կողմ: ${side}
📌 Ներկա: ${attendance}
🎟 Հյուրերի քանակ: ${guests}
        `;

        const myNumber = "37433030716"; // 🔥 քո Viber number (առանց +)

        const url = `viber://chat?number=${myNumber}`;

        // message-ը copy ենք անում
        navigator.clipboard.writeText(message);

        alert("Տվյալները copy եղան, բացվում է Viber");

        window.location.href = url;
      }}
    >
      Ուղարկել Viber
    </button>
  </div>
</div>
    </>
  );
}