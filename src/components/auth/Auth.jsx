import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import { auth as firebaseAuth } from "./firebaseconfig"; // This is your custom firebase auth instance

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("initial"); // initial, otpSent, newUser
  const recaptchaVerifierRef = useRef(null);
  const [uid, setUid] = useState(null);


  useEffect(() => {
    const recaptchaVerifierInstance = new RecaptchaVerifier(
      firebaseAuth,
      "recaptcha-container",
      {
        size: "invisible"
      }
    );

    recaptchaVerifierRef.current = recaptchaVerifierInstance;

    return () => {
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear(); // Cleanup on component unmount
      }
    };
  }, []);

  const sendOtp = () => {
    signInWithPhoneNumber(
      firebaseAuth,
      phoneNumber,
      recaptchaVerifierRef.current
    ) // <-- use firebaseAuth here
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setStatus("otpSent");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error sending OTP:", error);
    } });
  };

  const verifyOtp = () => {
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        user.getIdToken().then((idToken) => {
          authenticateWithBackend(idToken, user.phoneNumber);
        });
      })
      . catch( (error) =>{
        if (error.response) {
            console.error("Backend responded with:", error.response.data);
        } else {
            console.error("Error during authentication:", error);
        }
    })
  };
  const contextValue = useMemo(() => ({ sendOtp }), [sendOtp]);

    const authenticateWithBackend = async (idToken, phoneNumber) => {
    try {
      const response = await axios.post(
        //"http://localhost:3001/auth/authenticate",
        "https://hyggexbackend-d2b0.onrender.com/api/v1/auth/authenticate",
        {
          idToken,
          phoneNumber,
        }
      );
      if (response.data.success) {
        if (response.data.status === "loggedIn") {
          alert("Logged In Successfully!");
        } else if (response.data.status === "newUser") {
          setStatus("newUser");
          setUid(response.data.uid);  // <-- Store the UID here
        }
      }
    } catch (error) {
      if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error during authentication:", error);
      }
  }

  };


  const register = async () => {
    try {
      const response = await axios.post("https://hyggexbackend-d2b0.onrender.com/api/v1/auth/register", {
        uid,  // <-- Send the UID here http://localhost:3001/auth/register
        name,
        email,
        phoneNumber,
        location,
        schoolStudent,


      });
      if (response.data.success) {
        alert("Registered Successfully!");
      }
    } catch (error) {
      if (error.response) {
          console.error("Backend responded with:", error.response.data);
      } else {
          console.error("Error during authentication:", error);
      }
    }

  };

  return (

    <div>
      {status === "initial" && (
        <>

          <input
            type="text"
            placeholder="Phone Numbe"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Continue</button>
          <div id="recaptcha-container"></div>
        </>
      )}
      {status === "otpSent" && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      {status === "newUser" && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={register}>Register</button>
        </>
      )}

    </div>

  );
}

export default Auth;


