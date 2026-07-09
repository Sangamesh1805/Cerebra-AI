import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold">Home Page</h1>
      </div>
    </>
  );
}

export default Home;
