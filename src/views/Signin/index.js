import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

import { Logo, Input, Button } from "../../components";

import { loginUser } from "../../Config/firebase";

import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Signin = ({ setScreen }) => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password too short")
      .matches(/\d+/, "Password no number")
      .matches(/[a-z]+/, "Password no lowercase")
      .matches(/[A-Z]+/, "Password no uppercase")
      .matches(/[!@#$%^&*.()-+]+/, "Password no special char")
      .test(
        "Password has spaces",
        { spaces: "Password has spaces" },
        (value) => !/\s+/.test(value),
      ),
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
      email: "",
      password: "",
    },
    // validationSchema: signInSchema,
    onSubmit: (values) => {
      loginUserHandle({ email: values.email, password: values.password });
    },
  });

  const loginUserHandle = async (obj) => {
    try {
      const user = await loginUser(obj);
      swal("", "Account Login successfully!", "success");
    } catch ({ code }) {
      swal("", code, "error");
    }
  };

  return (
    <Box sx={styles.container}>
      <Stack alignItems={"center"}>
        <Logo />
        <h3>Sign In</h3>
      </Stack>
      <Box
        component="form"
        sx={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          label="Email"
          placeholder="Enter your Email Address"
          icon={<EmailIcon style={{ color: "white" }} />}
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.email}
          errors={errors.email}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.password}
          errors={errors.password}
          icon={<LockOpenIcon style={{ color: "white" }} />}
        />

        <Button text="Sign In" type="submit" />
      </Box>
      <Typography>-Or-</Typography>
      <Typography>Sign in with</Typography>
      <Stack>
        <div className="socials">
          <a className="social-btn" href="" id="g-btn">
            <p>Google</p>
          </a>
          <a className="social-btn" href="" id="fb-btn">
            <p>Facebook</p>
          </a>
        </div>
      </Stack>
      <p
        style={{
          paddingTop: "3rem",
        }}
      >
        Don't have an Account ?
        <span onClick={() => setScreen("signup")} style={styles.signin}>
          Sign Up
        </span>
      </p>
    </Box>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    padding: "20px",
    display: "flex",
    // justifyContent: "center",
    paddingBlock: "2rem",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    color: "white",
    background:
      "linear-gradient(to bottom, rgb(112, 172, 244) 0%,  rgb(47, 129, 229) 100%)",
  },
  form: {
    width: { xs: "100%", sm: "350px" },
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  signin: {
    paddingLeft: "4px",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      color: "rgb(112, 172, 244)",
    },
  },
};

export default Signin;
