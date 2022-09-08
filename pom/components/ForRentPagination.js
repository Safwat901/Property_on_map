import "antd/dist/antd.css";
import { Pagination } from "antd";

const ForRentPagination = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Pagination total={50} pageSize={10}></Pagination>
      </div>
    </>
  );
};

export default ForRentPagination;
