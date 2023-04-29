import { FaCar, FaBaby, FaUniversity } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { MdOutlinePets, MdComputer, MdOutlineChair } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { AiOutlineMobile, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";

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
export default categoryData;
