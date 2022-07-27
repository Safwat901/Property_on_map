import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex_container">
        <div className="foot_er col1">
          <h1>Useful Links</h1>
          <Link href="/">ABOUT US</Link>
          <Link href="/">CONTACT US</Link>
          <Link href="/">CAREERS </Link>
          <Link href="/">TERMS AND PRIVACY POLICY </Link>
        </div>
        <div className="foot_er col2">
          <h1>NEWSLETTER</h1>
          <form>
            <input type="email" placeholder="Your e-mail address" />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
        <div className="foot_er col3">
          <h1>CONTACT</h1>
          <p>Email</p>

          <p>Phone</p>

          <p>Mymensingh</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
