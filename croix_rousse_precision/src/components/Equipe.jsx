import { EquipePhoto } from "../assets";

const Equipe = () => (
  <section
    className="w-screen sm:fixed sm:-top-5 sm:left-0 sm:w-full sm:z-[-1]" // Apply the new class here
  >
    <img className="w-screen" src={EquipePhoto} />
  </section>
);

export default Equipe;
