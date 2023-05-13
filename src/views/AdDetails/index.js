import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAd, getAllAdsData } from "../../Config/firebase";
import { HiOutlineLocationMarker } from "react-icons/hi";
import ImageGallery from "react-image-gallery";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";

const AdDetails = () => {
  const [data, setData] = useState();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { docId } = useParams();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await getAd(docId);
      setData(res);
    } catch ({ message }) {
      console.error("Get Ad", message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (docId) getData();
  }, []);

  useEffect(() => {
    const newImages = [];
    data?.images?.forEach((v) => {
      newImages.push({
        original: v,
        thumbnail: v,
      });
    });
    setImages(newImages);
  }, [data?.images]);

  return (
    <>
      {loading ? (
        "Data fetching please wait..."
      ) : (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              // width: "900px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBlock: "1rem",
            }}
          >
            {images && <ImageGallery items={images} showPlayButton={false} />}
          </Box>

          <Stack
            justifyContent="center"
            alignItems="center"
            gap="1rem"
            marginBottom="1rem"
          >
            <Box sx={box}>
              <Stack
                flexDirection="row"
                // alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", paddingBottom: "1rem" }}
                >
                  Rs {data?.price}
                </Typography>
                <FavoriteBorderIcon />
              </Stack>
              <Typography variant="h5">{data?.title}</Typography>
              <Typography sx={{ color: "rgba(128, 128, 128, 0.900)" }}>
                <HiOutlineLocationMarker />
                {data?.location}
              </Typography>
            </Box>
            <Box sx={box}>
              <Typography variant="h5">Description</Typography>
              <Typography>{data?.description}</Typography>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default AdDetails;

const box = {
  border: "1px solid #bdc3c7",
  // margin: "1rem ",
  padding: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  width: "900px",
};
