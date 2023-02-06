import Image from "next/image";

const Clients = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-md-between justify-content-center mb-md-4 mb-3">
        <h2 className="mb-0">ลูกค้าที่ให้ความไว้วางใจ</h2>

        <div className="d-md-flex d-none ms-4">
          <button
            type="button"
            id="prev-brand"
            className="btn btn-prev btn-icon btn-sm me-2"
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-brand"
            className="btn btn-next btn-icon btn-sm ms-2"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div
        className="swiper mx-n2"
        data-swiper-options='{
          "slidesPerView": 3,
          "navigation": {
            "prevEl": "#prev-brand",
            "nextEl": "#next-brand"
          },
          "loop": true,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3,
              "spaceBetween": 8
            },
            "650": {
              "slidesPerView": 4,
              "spaceBetween": 8
            },
            "900": {
              "slidesPerView": 5,
              "spaceBetween": 8
            },
            "1100": {
              "slidesPerView": 6,
              "spaceBetween": 8
            }
          }
        }'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/02.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/03.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/04.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/05.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/06.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/01.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/02.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/03.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/04.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/05.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>

          <div className="swiper-slide py-3">
            <a href="#" className="card card-body card-hover px-2 mx-2">
              <img
                src="assets/img/brands/06.svg"
                className="d-block mx-auto my-2"
                width="154"
                alt="Brand"
              />
            </a>
          </div>
        </div>
        <div className="swiper-pagination position-relative bottom-0 mt-4 mb-lg-2"></div>

        {/* <div className="swiper-pagination position-relative pt-3 mt-4 d-md-none d-flex"></div> */}
      </div>
    </>
  );
};

export default Clients;
