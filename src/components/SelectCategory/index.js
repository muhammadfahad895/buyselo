import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import categoryData from "../../categoryData";

const SelectCategory = ({ setCategory }) => {
  return (
    <Box sx={style.selectCategory}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ borderBottom: "1px solid grey" }}
      >
        Choose a Category
      </Typography>
      <List>
        {categoryData.map((el, i) => {
          return (
            <ListItem key={i} sx={style.category}>
              <ListItemButton
                sx={{ "&:hover": { backgroundColor: "unset" } }}
                onClick={(e) => setCategory(e.target.innerText)}
              >
                <ListItemIcon>{el.icon}</ListItemIcon>
                <ListItemText primary={el.categoryName} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SelectCategory;

const style = {
  selectCategory: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    // paddingBlock: "1rem",
  },
  category: {
    display: "flex",
    fontSize: "2rem",
    alignItems: "center",
    gap: "1rem",
    border: "1px solid grey",
    width: "30rem",
    padding: "0.5rem 2rem",
    "&:hover": {
      bgcolor: "#3498db",
      color: "white",
    },
  },
};
