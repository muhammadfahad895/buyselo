import { Box, Typography } from "@mui/material";
import React from "react";
import adpic from "../../assets/adpic.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";

const AdCard = () => {
  return (
    <Box sx={cardContainer}>
      <img src={adpic} alt="Ad img" width="262px" height="232px" />
      <Box sx={cardBody}>
        <Typography variant="h5">BMW F20 1 Series Hatchback 5-door</Typography>
        <Typography sx={{ color: "rgba(128, 128, 128, 0.900)" }}>
          <HiOutlineLocationMarker />
          Karachi, Sindh
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Rs 2000
        </Typography>
      </Box>
    </Box>
  );
};

//http://preview.themeforest.net/item/post-and-buy-classified-ads-html-template/full_screen_preview/19979810?clickid=1HrRYDR6JxyNR5RwPA1SXw1ZUkAQDq0Y73HVyE0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1310690&mp_value1=&utm_campaign=af_impact_radius_1310690&utm_medium=affiliate&utm_source=impact_radius

// https://themeforest.net/item/classified-plus-classifieds-websites-psd-templates/21155267?ref=designuser#

const cardContainer = {
  width: "263px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  border: "1px solid rgba(31, 30, 30, 0.308)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};
const cardBody = {
  width: "263px",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  paddingLeft: "0.8rem",
};

export default AdCard;
