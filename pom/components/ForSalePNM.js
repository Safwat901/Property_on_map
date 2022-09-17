import Link from "next/link";
const ForSalePNM = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "10px",

          alignItem: "center",
        }}
      >
        <div
          style={{
            marginLeft: "-10px",

            alignItem: "center",
          }}
          className="forSale"
        >
          <div className="forSale_col">
            <h3>Useful Links</h3>

            <Link href="/">ABOUT US</Link>
            <Link href="/">CONTACT US</Link>
            <Link href="/">CAREERS </Link>
            <Link href="/">TERMS AND PRIVACY </Link>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", margin: "30px" }}
            className="forSale_col"
          >
            <h3>Useful Links</h3>
            <Link href="/">ABOUT US</Link>
            <Link href="/">CONTACT US</Link>
            <Link href="/">CAREERS </Link>
            <Link href="/">TERMS AND PRIVACY </Link>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", margin: "30px" }}
            className="forSale_col"
          >
            <h3>Useful Links</h3>
            <Link href="/">ABOUT US</Link>
            <Link href="/">CONTACT US</Link>
            <Link href="/">CAREERS </Link>
            <Link href="/">TERMS AND PRIVACY </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "30px",
            }}
            className="forSale_col "
          >
            <h3>Useful Links</h3>
            <Link href="/">ABOUT US</Link>
            <Link href="/">CONTACT US</Link>
            <Link href="/">CAREERS </Link>
            <Link href="/">TERMS AND PRIVACY </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForSalePNM;
