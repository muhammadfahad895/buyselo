import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const AdPics = ({ setFile }) => {
  const [imageDataUrl, setImageDataUrl] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setFile(file);
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImageDataUrl(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="label"
      sx={{
        border: "2px solid grey",
        borderRadius: "2px",
        margin: "0px",
        padding: imageDataUrl ? "0px" : "2rem",
      }}
    >
      <input
        hidden
        accept="image/*"
        type="file"
        id="fileInput"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
      {imageDataUrl ? (
        <img src={imageDataUrl} alt="Selected Image" width="130px" />
      ) : (
        <MdOutlineAddPhotoAlternate color="black" fontSize="3rem" />
      )}
    </IconButton>
  );
};

export default AdPics;
