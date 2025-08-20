import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, type User } from "firebase/auth";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { doc, getDoc } from "firebase/firestore";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  // Watch auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // fetch username from Firestore
        const name = await getUsername(currentUser.uid);
        setUsername(name);
      } else {
        setUsername(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);

      // fetch username after login
      const name = await getUsername(userCred.user.uid);
      setUsername(name);
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setUsername(null);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  async function getUsername(uid: string) {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        return data.username as string;
      } else {
        console.log("No such user!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching username:", error);
      return null;
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="grid min-h-screen justify-center items-center bg-stone-900 text-white">
      <Navbar />
      {user ? (
        <div className="grid gap-4 text-center">
          <h2 className="text-2xl">Welcome, {username ?? "User"} 👋</h2>
          <p>To get started, create a post!</p>
          <button
            onClick={handleSignOut}
            className="border p-2 mt-12 bg-stone-700 hover:bg-stone-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="grid justify-center gap-8">
          <h1 className="text-2xl text-center font-semibold">Sign In</h1>
          <form onSubmit={handleSignIn} className="grid justify-center gap-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            <button type="submit" className="border p-2 bg-stone-700 hover:bg-stone-600">
              Sign In
            </button>
          </form>
          {isSuccess === false && (
            <div className="bg-red-700 text-white p-2 rounded-md shadow-md text-center w-[300px]">
              Sign in failed. Check your email and password and try again.
            </div>
          )}
          <Link to="/sign-up" className="underline w-fit hover:text-stone-200">
            Not signed in yet? Sign up here.
          </Link>
        </div>
      )}
    </div>
  );
}
