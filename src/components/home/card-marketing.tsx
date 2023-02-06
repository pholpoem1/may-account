import Image from "next/image";

const CardMarketing = () => {
  return (
    <div className="card bg-white border-primary shadow-sm px-4 px-lg-0">
      <div className="row align-items-center py-3">
        <div className="col-xl-5 col-md-6 offset-lg-1 text-center text-md-start py-4 py-lg-5">
          <h2 className="h1">หมดปัญหาการทำบัญชี</h2>
          <h3 className="h4 text-primary">
            การทำบัญชี และภาษีไม่ใช่เรื่องยากอีกต่อไป
          </h3>
          <p className="mb-4 mb-lg-5">
            At ultricies id non quisque integer eget velit. Facilisis enim
            malesuada metus, risus amet ultricies. Magna aliquam id nunc ut eu.
          </p>
          <a href="#" className="btn btn-primary">
            ขอใบเสนอราคา
          </a>
        </div>
        <div className="col-xl-6 col-lg-5 col-md-6 text-center">
          <Image
            loading="lazy"
            src={"/assets/img/accountant-concept.jpg"}
            alt=""
            width={416}
            height={416}
          />
        </div>
      </div>
    </div>
  );
};

export default CardMarketing;
