import Link from "next/link";

const Login_button = (props) => {
  return (
    <>
      <div className="sign_in">
        <Link href="/Login">
          <button className="sign_up btn">{props.title}</button>
        </Link>
      </div>
    </>
  );
};

export default Login_button;
