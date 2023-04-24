import React, { useState } from "react";

// Third
import { Box, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

// Component
import { Logo, Input, Button } from "../../components";

// Config
import { createUser } from "../../Config/firebase";

// Icon
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Signup = ({ setScreen }) => {
  const [loading, setLoading] = useState(false);

  // Yup Validation Schema
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
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
    confirmPassword: Yup.string()
      .required("Please retype your password.")
      .oneOf([Yup.ref("password")], "Your passwords do not match."),
  });

  // Formik
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    // validationSchema: signupSchema,
    onSubmit: (values) => {
      createUserHandle({
        email: values.email,
        password: values.password,
        displayName: values.name,
      });
    },
  });

  const createUserHandle = async (obj) => {
    setLoading(true);
    const user = await createUser(obj);
    if (user) {
      resetForm();
      swal("", "Account created successfully!", "success");
    }
    setLoading(false);
  };

  return (
    <Box sx={styles.container}>
      <Stack alignItems={"center"}>
        <Logo />
        <h3>Sign Up</h3>
      </Stack>
      <Box
        component="form"
        sx={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          label="Full Name"
          placeholder="Enter your name"
          icon={<PersonIcon style={{ color: "white" }} />}
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.name}
          errors={errors.name}
        />
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
          placeholder="Enter password"
          icon={<LockOpenIcon style={{ color: "white" }} />}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.password}
          errors={errors.password}
        />
        <Input
          type="password"
          label="Confrim Password"
          placeholder="Confrim password"
          icon={<LockOpenIcon style={{ color: "white" }} />}
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.confirmPassword}
          errors={errors.confirmPassword}
        />
        <Button loading={loading} text="Sign Up" type="submit" />
      </Box>
      <p
        style={{
          paddingTop: "3rem",
        }}
      >
        Don't have an Account ?
        <span onClick={() => setScreen("signin")} style={styles.signin}>
          Sign In
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    background:
      "linear-gradient(to bottom, rgb(112, 172, 244) 0%,  rgb(47, 129, 229) 100%)",
    color: "white",
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

export default Signup;
