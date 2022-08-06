import Link from "next/link";
const ForRentPNM = () => {
  return (
    <>
      <div style={{ display: "flex" }} className="forSale">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "30px",
            marginBottom: "80%",
          }}
          className="forSale col1"
        >
          <h3>Useful Links</h3>
          <Link href="/">ABOUT US</Link>
          <Link href="/">CONTACT US</Link>
          <Link href="/">CAREERS </Link>
          <Link href="/">TERMS AND PRIVACY </Link>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
          className="forSale col2"
        >
          <h3>Useful Links</h3>
          <Link href="/">ABOUT US</Link>
          <Link href="/">CONTACT US</Link>
          <Link href="/">CAREERS </Link>
          <Link href="/">TERMS AND PRIVACY </Link>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
          className="forSale col3"
        >
          <h3>Useful Links</h3>
          <Link href="/">ABOUT US</Link>
          <Link href="/">CONTACT US</Link>
          <Link href="/">CAREERS </Link>
          <Link href="/">TERMS AND PRIVACY </Link>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
          className="forSale col1"
        >
          <h3>Useful Links</h3>
          <Link href="/">ABOUT US</Link>
          <Link href="/">CONTACT US</Link>
          <Link href="/">CAREERS </Link>
          <Link href="/">TERMS AND PRIVACY </Link>
        </div>
      </div>
    </>
  );
};

export default ForRentPNM;
