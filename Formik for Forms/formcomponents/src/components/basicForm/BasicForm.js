import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
function BasicForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });
  return (
    <Stack spacing={2} padding={2}>
      <Typography variant="h6">This is a Simple Form</Typography>
      <Box component="div">
        <FormControl component="form" onSubmit={formik.handleSubmit}>
          <FormLabel>Name</FormLabel>
          <TextField
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <FormLabel>Email</FormLabel>
          <TextField
            type="text"
            variant="outlined"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            type="password"
            variant="outlined"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit">Submit</Button>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default BasicForm;
