import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function MuiLayout() {
  return (
    <>
      <Stack mt={2} mb={2}>
        <Paper sx={{ padding: "32px" }} elevation={4}>
          <Typography variant="h6">This is an example of a paper</Typography>
        </Paper>
      </Stack>
      <Stack
        spacing={2}
        sx={{ border: "1px solid" }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          mt={2}
          sx={{
            width: "300px",
            height: "300px",
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          <Typography variant="h6">
            This is A Box Component, simple div
          </Typography>
        </Box>
        <Box
          mt={2}
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          Here p=2 is 16 px
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2} xs={12}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2} xs={12}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2} xs={12}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2} xs={12}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MuiLayout;
