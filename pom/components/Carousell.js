// import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Carousell = (props) => {
  return (
    <>
      <Carousel>
        <div
          style={{ top: "0", marginTop: "-530px" }}
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                style={{ borderRadius: "45%", width: "1500px" }}
                src={props.imgsrc}
                width="1300"
                height="1300"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Carousell;
