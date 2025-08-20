import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUp = async (
    e: { preventDefault: () => void }
  ) => {
    e.preventDefault();
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up user:", userInfo.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-60 grid justify-center gap-8 text-white">
      <Navbar />
      <h1 className="text-2xl text-center font-semibold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="grid justify-center gap-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="true"
          className="w-[300px] p-2 border"
        />
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          autoComplete="true"
          className="w-[300px] p-2 border"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-[300px] p-2 border"
        />
        <label htmlFor="password2">Re enter password</label>
        <input
          id="password2"
          name="password"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
          className="w-[300px] p-2 border"
        />
        <button type="submit" className="border p-2 bg-stone-700 hover:bg-stone-600">
          Sign Up
        </button>
      </form>
      <Link to="/sign-in" className="underline w-fit hover:text-stone-200">
        Have an account? Sign in here.
      </Link>
    </div>
  );
}
