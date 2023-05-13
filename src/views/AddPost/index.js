import React, { useState } from "react";
import { Logo, Button as Btn, AddPics } from "../../components";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { createPostAd, uploadImage } from "../../Config/firebase";
import { auth } from "../../Config/firebase";

import { useLocation } from "react-router-dom";
import { SelectCategory } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

const AddPost = () => {
  const [category, setCategory] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState({});
  const [user] = useState(auth.currentUser.uid);

  const postAdSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    location: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      category: category,
      description: "",
      price: "",
      location: "",
      name: "",
      user,
    },
    // validationSchema: postAdSchema,
    onSubmit: async (values) => {
      let imagesUrls;
      try {
        imagesUrls = await Promise.all(
          Object.values(images).map(
            async (_image) => await uploadImage(_image),
          ),
        );
      } catch (e) {
        console.error("Image Upload Failed", e);
      }
      createAddHandle({
        title: values.title,
        description: values.description,
        price: values.price,
        location: values.location,
        name: values.name,
        category: category,
        images: imagesUrls,
        user: user,
      });
    },
  });

  const createAddHandle = async (obj) => {
    const ads = await createPostAd(obj);
    setLoading(true);
    if (ads) {
      resetForm();
      swal("", "Ad created successfully!", "success");
      console.log("ads", ads);
    }
    setLoading(false);
  };

  const _setImage = (file, index) => {
    setImages({ ...images, [index]: file });
  };

  const { state } = useLocation();

  return (
    <Box>
      <Box sx={{ paddingBlock: "1rem", backgroundColor: "#2980b9" }}>
        <Logo width="130px" />
      </Box>
      <Typography
        textTransform="uppercase"
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        paddingY="1.5rem"
      >
        Post your ad
      </Typography>
      {category ? (
        <Box
          sx={{
            margin: "0rem 2.5rem} 2.5rem",
            padding: "1.5rem 4rem",
            border: "1px solid grey",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography
              textTransform="uppercase"
              variant="h5"
              fontWeight="bold"
            >
              selected category
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>{location.state.cat}</Typography>
              <Button
                sx={{
                  textTransform: "lowercase",
                  textDecoration: "underLine",
                  fontWeight: "bold",
                }}
                onClick={() => setCategory(null)}
              >
                Change
              </Button>
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Include Some details
            </Typography>
            <TextField
              label="Add title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.title}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
              fullWidth
              // helperText="Mention the key features of your item (e.g. brand, model, age, type)"
            />
            <TextField
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.description}
              errors={errors.description}
              fullWidth
              multiline
              rows={4}
              helperText="Include condition, features and reason for selling"
            />

            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Price
            </Typography>
            <TextField
              label="Add Price"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.price}
              errors={errors.price}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rs</InputAdornment>
                ),
              }}
            />
            <Typography textTransform="uppercase" variant="h5">
              Upload up to 5 photos
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <AddPics setFile={(file) => _setImage(file, 0)} />
              <AddPics setFile={(file) => _setImage(file, 1)} />
              <AddPics setFile={(file) => _setImage(file, 2)} />
              <AddPics setFile={(file) => _setImage(file, 3)} />
              <AddPics setFile={(file) => _setImage(file, 4)} />
            </Box>
            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight="bold"
            >
              YOUR AD'S LOCATION
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.location}
                errors={errors.location}
                id="demo-simple-select"
                label="Location"
              >
                <MenuItem value="Azad Kashmir, Pakistan">
                  Azad Kashmir, Pakistan
                </MenuItem>
                <MenuItem value="Balochistan, Pakistan">
                  Balochistan, Karachi
                </MenuItem>
                <MenuItem value="Khyber Pakhtunkhwa, Karachi">
                  Khyber Pakhtunkhwa, Pakistan
                </MenuItem>
                <MenuItem value=" Northern Areas, Karachi">
                  Northern Areas, Pakistan
                </MenuItem>
                <MenuItem value="Punjab, Karachi">Punjab, Pakistan</MenuItem>
                <MenuItem value="Sindh, Karachi">Sindh, Pakistan</MenuItem>
              </Select>
            </FormControl>
            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Review your details
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: "100px", height: "100px" }}
              />
              <TextField
                id="outlined-basic"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.name}
                errors={errors.name}
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ alignSelf: "center" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <Typography>Your Phone Number</Typography>
              <Typography>+923480227510</Typography>
            </Box>
            <Btn loading={loading} text="POST NOW" type="submit" />
          </Box>
        </Box>
      ) : (
        <SelectCategory setCategory={setCategory} />
      )}
    </Box>
  );
};

export default AddPost;
