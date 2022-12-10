import { Grid, Typography } from "@mui/material";
import TextField from "./FormUI/TextField";
import { Stack } from "@mui/system";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid number")
    .required("Required"),
  address: Yup.string().required("required"),
  city: Yup.string().required("required"),
  state: Yup.string().required("required"),
});

function FormMain() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{ width: "100%", margin: "800 auto" }}
    >
      <Typography variant="h6">This is Advance form</Typography>

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Your Details</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField name="firstName" label="first name" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="lastName" label="last name" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="Phone" label="Phone Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="email Id" />
            </Grid>
            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField name="address" label="Address" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="city" label="City" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="state" label="State" />
            </Grid>
            <Grid item xs={6}>
              <Typography>Booking Information</Typography>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Stack>
  );
}

export default FormMain;
