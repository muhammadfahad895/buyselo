import {
  Box,
  InputLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const Input = ({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type,
  name,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <Box>
      <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: "white" }}>
        {label}
      </InputLabel>
      <TextField
        sx={{
          input: {
            color: "white",
            backgroundColor: "transparent",
          },
          "& .MuiOutlinedInput-root": {
            // "& fieldset": {
            //   borderColor: "yellow",
            // },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        fullWidth
        type={type}
        name={name}
        size="small"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        variant="outlined"
      />
      {errors && touched && errors && (
        <Typography sx={{ fontSize: "13px", color: "red" }}>
          {errors}
        </Typography>
      )}
    </Box>
  );
};

export default Input;
