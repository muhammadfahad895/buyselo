import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Logo } from "../../components";
import img from "../../assets/adpic.jpg";
import { auth, filterDataByUserId } from "../../Config/firebase";

const MyAds = () => {
  const [data, setData] = useState();
  const [user] = useState(auth.currentUser.uid);

  const getData = async () => {
    try {
      const res = await filterDataByUserId(user);
      console.log("res", res);
      setData(res);
    } catch ({ message }) {
      console.error("Get Ad", message);
    }
  };

  useEffect(() => {
    if (user) getData();
  }, []);

  return (
    <Box>
      <Box sx={{ paddingBlock: "1rem", backgroundColor: "#2980b9" }}>
        <Logo width="130px" />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" textAlign="center" paddingTop="1rem">
          My Ads
        </Typography>
        <Box sx={card}>
          <img src={img} width="120px" height="120px" />
          <Stack gap="1rem">
            <Typography variant="h4">Nikon Camera DSLR</Typography>
            <Typography sx={{ color: "rgba(128, 128, 128, 0.900)" }}>
              <HiOutlineLocationMarker />
              Sindh
            </Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda facilis et architecto modi quisquam,
            </Typography>
          </Stack>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Rs 2000
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyAds;

const card = {
  border: "1px solid #95a5a6",
  margin: "1rem",
  display: "flex",
  gap: "2rem",
  padding: "1rem",
  justifyContent: "space-between",
  width: "800px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
};
