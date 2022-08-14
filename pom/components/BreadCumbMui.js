import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const BreadCumbMui = (props) => {
  return (
    <div
      style={{
        marginLeft: "100px",
        marginTop: "50px",
      }}
    >
      <Box m={2}>
        <Breadcrumbs aria-level="breadcumb">
          <Link style={{ fontFamily: "Tahoma" }} underline="hover" href="/">
            Home
          </Link>
          <Link style={{ fontFamily: "Tahoma" }} underline="hover" href="/">
            {props.segment}
          </Link>
          <Typography style={{ fontFamily: "Tahoma" }}>
            {props.place}
          </Typography>
        </Breadcrumbs>
      </Box>
    </div>
  );
};

export default BreadCumbMui;
