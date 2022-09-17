import Carousel from "react-bootstrap/Carousel";

const SliderVt = () => {
  return (
    <>
      <Carousel
        style={{
          width: "70%",
          marginLeft: "200px",
          objectFit: "contain",
          marginTop: "5rem",
        }}
        slide={false}
      >
        <Carousel.Item>
          <img
            style={{
              height: "300px",
            }}
            className="d-block w-100"
            src="/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "300px",
            }}
            className="d-block w-100"
            src="/slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SliderVt;
