import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import LoginCard from "../components/LoginCard";
import PrivateSection from "../components/PrivateSection";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <>
      <HeroSection />

      {!user && <LoginCard />}

      {user && <PrivateSection user={user} />}
    </>
  );
}

export default Home;
