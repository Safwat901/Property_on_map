const AdpropertyVdo = (propsd) => {
  const poster = "/card2.jpg";

  return (
    <>
      <video
        style={{ width: "300px" }}
        class="video-fluid z-depth-1"
        autoplay
        loop
        controls
        muted
      >
        <source src={propsd.vdosrc} poster={poster} type="video/mp4" />
      </video>
    </>
  );
};

export default AdpropertyVdo;
