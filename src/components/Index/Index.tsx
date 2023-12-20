import Chatbot from "../Chatbot/Chatbot";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <section className='w-full py-10'>
      <Hero />

      <Chatbot />
    </section>
  );
};

export default HomePage;
