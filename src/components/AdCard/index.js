import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { getAllAdsData } from "../../Config/firebase";

const AdCard = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getAllAdsData();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return data.map((item, index) => {
    return (
      <Box sx={cardContainer} key={index}>
        <img src={item.images} width="295px" height="232px" />

        <Box sx={cardBody}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography sx={{ color: "rgba(128, 128, 128, 0.900)" }}>
            <HiOutlineLocationMarker />
            {item.location}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", paddingBottom: "1rem" }}
          >
            Rs {item.price}
          </Typography>
        </Box>
      </Box>
    );
  });
};

const cardContainer = {
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid rgba(31, 30, 30, 0.308)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};
const cardBody = {
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  paddingLeft: "0.8rem",
};

export default AdCard;
