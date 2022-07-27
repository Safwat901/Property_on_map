import Link from "next/link";

const Login_button = () => {
  return (
    <>
      <div className="sign_in">
        <Link href="/Login">
          <button className="sign_up btn">Log in</button>
        </Link>
      </div>
    </>
  );
};

export default Login_button;
