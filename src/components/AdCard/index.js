import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { getAllAdsData } from "../../Config/firebase";
import { useNavigate } from "react-router-dom";

const AdCard = () => {
  const [data, setData] = useState([]);
 const navigate = useNavigate();
  const getData = async () => {
    const res = await getAllAdsData();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", data);
  return data.map((item, index) => {
    return (
      <Box
        sx={cardContainer}
        key={index}
        onClick={() => navigate(`addetail/${item.docId}`)}
      >
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
  border: "1px solid rgba(31, 30, 30, 0.308)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};
const cardBody = {
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  paddingLeft: "0.8rem",
  borderTop: "1px solid rgba(31, 30, 30, 0.308)",
  paddingBlock: "0.5rem",
};

export default AdCard;
