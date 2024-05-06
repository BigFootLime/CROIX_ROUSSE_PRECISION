import { EquipePhoto } from "../assets";

const Equipe = () => (
  <section
    id="features"
    data-aos="fade"
    data-aos-offset="200"
    data-aos-duration="3000"
    className="w-screen equipeBackground" // Apply the new class here
  >
    <img src={EquipePhoto} />
  </section>
);

export default Equipe;
