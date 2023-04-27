import React from "react";
import { AdCard } from "../../components";
import { Box, Stack, Typography } from "@mui/material";

const UserAds = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        paddingBlock: "2.5rem",
      }}
    >
      <div>
        <Typography variant="h4">Trending Ads</Typography>
        <Typography>Explore trending ads you may like</Typography>
      </div>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        marginX="1.2rem"
        gap="1rem"
      >
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
      </Stack>
    </Box>
  );
};

export default UserAds;
