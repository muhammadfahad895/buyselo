import { Box, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import Button from "../Button";

const SearchBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        // border: "2px solid white",
        borderRadius: "50px",
        width: "filled",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Search"
        focused={false}
        sx={{
          flex: 5,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
          },
        }}
      />
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        focused={false}
        sx={{
          flex: 1,
          "&:hover": {
            "&& fieldset": {
              border: "transparent !important",
            },
          },
          "&& fieldset": {
            border: "transparent !important",
          },
        }}
        // to override the color of the dropdown container
        // MenuProps={{
        //   PaperProps: {
        //     sx: {
        //       "& .MuiMenuItem-root.Mui-selected": {
        //         backgroundColor: "yellow",
        //       },
        //       "& .MuiMenuItem-root:hover": {
        //         backgroundColor: "pink",
        //       },
        //       "& .MuiMenuItem-root.Mui-selected:hover": {
        //         backgroundColor: "red",
        //       },
        //     },
        //   },
        // }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ flex: 1 }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Button text="Search Now" sx={{ height: "55px", marginInline: "2px" }} />
    </Box>
  );
};

export default SearchBar;
