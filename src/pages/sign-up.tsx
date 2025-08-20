import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../firebase";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const Navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Save user profile in Firestore
      await setDoc(doc(db, "users", uid), {
        username,
        email,
        createdAt: serverTimestamp(),
      });

      setEmail("");
      setUsername("");
      setPassword("");
      setPassword2("");
      toast.success("Account created");
      Navigate("/sign-in");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      console.error(err);
      toast.error("Couldn't make account");
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[300px] p-2 border border-stone-600 rounded bg-stone-800"
        />

        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-[300px] p-2 border border-stone-600 rounded bg-stone-800"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-[300px] p-2 border border-stone-600 rounded bg-stone-800"
        />

        <label htmlFor="password2">Re-enter Password</label>
        <input
          id="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
          className="w-[300px] p-2 border border-stone-600 rounded bg-stone-800"
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          className="border p-2 bg-stone-700 hover:bg-stone-600 disabled:opacity-50"
        >
          Sign Up
        </button>
      </form>

      <Link to="/sign-in" className="underline w-fit hover:text-stone-200 text-sm">
        Have an account? Sign in here.
      </Link>
    </div>
  );
}
