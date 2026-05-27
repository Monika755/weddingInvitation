import "./App.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const inviteRef = useRef(null);
  const [show, setShow] = useState(false);

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

        <div className="letters">
          <span className="letter left">Ա</span>
          <span className="letter right">Ս</span>
        </div>
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
      </div>

      {/* 🔥 CALENDAR - VERY END */}
      <div className="calendar">
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
      </div>
    </>
  );
}