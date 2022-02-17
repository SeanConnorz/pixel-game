import "../styles/About.css";

export default function About() {
  return (
    <section className="flex flex-col items-center my-[15rem] md:my-[30rem] w-full md:w-[50%] text-center">
      <h1 className="text-[2rem] mb-[2rem]">What is Pixel World?</h1>
      <p className="about-info w-[80%] md:w-[50%] md:text-[1rem]">
        Pixel world is a metaverse where only those who own a pixel world NFT
        have access to the game. It's an open world RPG where you can show off
        your characters, traits, and grow your metaverse realestate empire
      </p>
    </section>
  );
}
