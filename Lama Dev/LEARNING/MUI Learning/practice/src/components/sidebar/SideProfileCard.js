import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Avatar, Breadcrumbs, Link, Rating } from "@mui/material";

export default function SideProfileCard() {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 500,
        position: "relative",
        borderRadius: "10px",
        marginBottom: "18px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="green iguana"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent>
        <Stack justifyContent="center" alignItems="center">
          <Avatar
            src="https://randomuser.me/api/portraits/men/88.jpg"
            alt="Musician-Image"
            sx={{
              position: "absolute",
              top: 0,
              left: 30,
              height: "120px",
              width: "120px",
              transform: "translate(50%, 50%)",
            }}
          />
          <Stack mt={3} mb={2} alignItems="center" justifyContent="center">
            <Typography gutterBottom variant="h5" sx={{ margin: 0.5 }}>
              Musicians Name
            </Typography>
            <Typography
              variant="span"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              "Write something crazy and special about you, Something Unique"
            </Typography>
          </Stack>
          <Rating value={4.5} readOnly />
          <Breadcrumbs separator="|" mt={2}>
            <Link underline="none" href="#" color="inherit">
              100K Followers
            </Link>
            <Link underline="none" href="#" color="inherit">
              50 Following
            </Link>
          </Breadcrumbs>
        </Stack>
      </CardContent>
    </Card>
  );
}
