import React from "react";
import { Box, Typography } from "@mui/material";
import { FaCar, FaBaby, FaUniversity } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { MdOutlinePets, MdComputer, MdOutlineChair } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { AiOutlineMobile, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";

const Categories = () => {
  const categoryData = [
    {
      categoryName: "Vehicles",
      icon: <FaCar />,
    },
    {
      categoryName: "Electronic",
      icon: <MdComputer />,
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
      icon: <MdOutlinePets />,
    },
    {
      categoryName: "Furniture",
      icon: <MdOutlineChair />,
    },
    {
      categoryName: "Education",
      icon: <FaUniversity />,
    },
  ];
  return (
    <Box sx={style.category}>
      <Typography variant="h4"> Categories</Typography>
      <Typography> Explore categories in our site </Typography>
      <Box>
        <ul style={style.categoryList}>
          {categoryData.map((el) => {
            return (
              <li style={style.categoryItems}>
                <Box sx={style.icon}>{el.icon}</Box>
                <Typography> {el.categoryName}</Typography>
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default Categories;

const style = {
  category: {
    display: "flex",
    alignItems: "center",
    paddingBlock: "2rem",
    flexDirection: "column",
    backgroundColor: "rgb(27, 27, 27)",
    color: "white",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  categoryList: {
    display: "flex",
    paddingTop: "3rem",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  icon: {
    fontSize: "3rem",
    color: "white",
  },
  categoryItems: {
    flexBasis: "calc(100% / 6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "1rem",
  },
};
