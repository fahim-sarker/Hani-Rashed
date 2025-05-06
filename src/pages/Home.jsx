import Collaborator from "@/components/home/Collaborator";
import Header from "@/components/home/Header";
import Partner from "@/components/home/Partner";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  if (token) {
    const role = JSON.parse(localStorage.getItem("role"));
    if (role === "consultancy") {
      window.location.href = "dashboard/consultancyFirms/timeline";
    } else {
      window.location.href = "/dashboard/smallBusiness/timeline";
    }
  }

  return (
    <>
      <Header />
      <Collaborator />
      <Partner />
    </>
  );
};

export default Home;
