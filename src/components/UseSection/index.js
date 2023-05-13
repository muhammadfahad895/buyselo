import React from "react";
import { Box, Typography } from "@mui/material";
import { FaBlackTie, FaUserAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

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
      icon: <MdDescription />,
      heading: "Sold or Buy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Box sx={style.useSection}>
      {data.map((dt) => {
        return (
          <Box sx={style.items}>
            <div
              style={{
                fontSize: "4rem",
              }}
            >
              {dt.icon}
            </div>
            <Typography variant="h5">{dt.heading}</Typography>
            <Typography>{dt.description}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default UseSection;

const style = {
  useSection: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    paddingBlock: "2.5rem",
    backgroundColor: "#2980b9",
    color: "white",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },

  items: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: "center",
    paddingInline: "2rem",
    flexWrap: "wrap",
  },
};
