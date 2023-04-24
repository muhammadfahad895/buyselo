import React from "react";
import { Box, Typography } from "@mui/material";
import { FaBlackTie, FaUserAlt } from "react-icons/fa";
import DescriptionIcon from "@mui/icons-material/Description";

const UseSection = () => {
  const data = [
    {
      icon: <FaUserAlt />,
      heading: "Create a Free Account",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaBlackTie />,
      heading: "Post your Free Ad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.",
    },
    {
      icon: <DescriptionIcon />,
      heading: "Sold or Buy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Box>
      <Box>
        {data.map((dt) => {
          return (
            <>
              <div>{dt.icon}</div>
              <Typography>{dt.heading}</Typography>
              <Typography>{dt.description}</Typography>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default UseSection;
