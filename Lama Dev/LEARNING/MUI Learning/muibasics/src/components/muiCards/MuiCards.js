import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function MuiCards() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image="http://m.gettywallpapers.com/wp-content/uploads/2020/01/Wallpaper-Naruto-2.jpg"
          alt="unplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Something here a random text that shows something to do with the
            react library i am just ytyping randoly ntajkan yandklojng
            sonmething oabout nathe treacht tiahlkdsofi as nlaksnfoijs aklsj
            flasf l;mf ajsf ls;jli klnsa ff;
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCards;
