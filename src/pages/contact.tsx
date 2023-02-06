const Contact = () => {
  return (
    <section className="container pb-5 mb-1 my-md-4 my-lg-5">
      <div className="row pb-xl-3">
        <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
          <div className="gallery rounded-3 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d710.3707844189386!2d101.17646184757018!3d12.70834351738579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102fa89af6dc65b%3A0xeb92468460a5bd60!2s!5e0!3m2!1sth!2sth!4v1675514854267!5m2!1sth!2sth"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-xl-5 col-md-6 offset-xl-1">
          <h2 className="h1 pb-4 mb-1 mb-lg-3">ติดต่อขอรับคำปรึกษา</h2>
          <ul className="list-unstyled pb-3 mb-0 mb-lg-3">
            <li className="d-flex mb-3">
              <i className="bx bx-map text-muted fs-xl mt-1 me-2"></i>
              บริษัท เมย์ แอคเค้าติ้งส์ แอนด์ เซอร์วิสเซส จำกัด <br />
              45/65-66 ถนนสุขุมวิท 52 ตำบลเนินพระ อำเภอเมืองระยอง จังหวัดระยอง
              21150
            </li>
            <li className="d-flex mb-3">
              <i className="bx bx-phone-call text-muted fs-xl mt-1 me-2"></i>
              <a href="tel:+66648382805" className="fw-medium">
                0648382805
              </a>
            </li>
            <li className="d-flex mb-3">
              <i className="bx bx-time text-muted fs-xl mt-1 me-2"></i>
              <div>
                <div>
                  <span className="text-dark fw-semibold me-1">
                    จันทร์ – ศุกร์:
                  </span>
                  7:00 น. – 17:00 น.
                </div>
              </div>
            </li>
            <li className="d-flex mb-3">
              <i className="bx bx-envelope text-muted fs-xl mt-1 me-2"></i>
              <a href="mailto:maythicha@may-account.com" className="fw-medium">
                maythicha@may-account.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
