const SectionTop = () => {
  return (
    <section
      className="jarallax py-xxl-5 min-vh-100"
      style={{
        backgroundImage:
          "url(assets/img/shutter-stock/stock-photo-businessman-analyzing-investment-charts-with-laptop-accounting-334211525.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      data-jarallax
      data-img-position="0% 100%"
      data-speed="0.5"
    >
      <div className="container position-relative zindex-5 py-5">
        <div className="row justify-content-md-start justify-content-center">
          <div className="col-md-6 col-sm-8 order-md-1 order-2 d-flex flex-column justify-content-between mt-4 pt-2 text-md-start text-center">
            <div className="mb-md-5 pb-xl-5 mb-4">
              <h1 className="display-2 mb-md-5 mb-3 pb-3">
                We <span className="text-gradient-primary">Transform</span> Your
                Ideas into Reality
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
