import React from "react";
import { Box, Typography } from "@mui/material";
import { FaCar, FaBaby } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { AiOutlineMobile, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import TvIcon from "@mui/icons-material/Tv";
import PetsIcon from "@mui/icons-material/Pets";

const Categories = () => {
  const categoryData = [
    {
      categoryName: "Vehicles",
      icon: <FaCar />,
    },
    {
      categoryName: "Electronic",
      icon: <TvIcon />,
    },
    {
      categoryName: "Real Estate",
      icon: <AiOutlineHome />,
    },
    {
      categoryName: "Mobiles",
      icon: <AiOutlineMobile />,
    },
    {
      categoryName: "Fashion",
      icon: <GiClothes />,
    },
    {
      categoryName: "Jobs",
      icon: <BiBriefcase />,
    },
    {
      categoryName: "Baby Products",
      icon: <FaBaby />,
    },
    {
      categoryName: "Services",
      icon: <BsTools />,
    },
    {
      categoryName: "Matrimony",
      icon: <AiOutlineHeart />,
    },
    {
      categoryName: "Animal",
      icon: <PetsIcon />,
    },
  ];
  return (
    <Box>
      <Typography> Categories</Typography>
      <Typography> Explore categories in our site </Typography>
      <Box>
        <ul>
          {categoryData.map((el) => {
            return (
              <li>
                <div>{el.icon}</div>
                {el.categoryName}
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default Categories;
