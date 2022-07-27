// import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Carousell = () => {
  return (
    <>
      <Carousel>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/carousel1.jpg "
                width="500"
                height="600"
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
