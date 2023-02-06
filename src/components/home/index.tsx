import SectionTop from "../section-top";
import CardMarketing from "./card-marketing";
import Clients from "./clients";
import Contact from "./contact";
import OurServices from "./our-services";
import WhyUs from "./why-us";

const HomeComponent = () => {
  return (
    <div>
      <SectionTop />

      <section className="container pb-2 pb-md-4 pb-lg-5 mb-3 my-5">
        <OurServices />
      </section>

      <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <WhyUs />
      </section>

      <section className="container">
        <CardMarketing />
      </section>

      <section className="container my-5">
        <Clients />
      </section>

      <div className="container">
        <Contact />
      </div>
    </div>
  );
};

export default HomeComponent;
