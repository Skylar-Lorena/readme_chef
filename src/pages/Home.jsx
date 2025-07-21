import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css"
import ReadMeEditor from "../components/ReadMeEditor";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ReadMeEditor />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
