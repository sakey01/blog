import Navbar from "../components/navbar";

const SignIn = () => {
  return (
    <div className="grid min-h-screen w-full bg-stone-900 text-white">
      <Navbar />
      <input type="email" className="border"/>
      <input type="password" className="border"/>
    </div>
  );
};

export default SignIn;
