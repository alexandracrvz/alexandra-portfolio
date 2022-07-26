import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


function Contact() {
  return (
    <Grid container>
    <Card sx={{ minWidth: 1 }}>
      <img src="" />
      <CardContent>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
          component="div"
          color="#F2735B"
        >
          Let's connect!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="http://www.linkedin.com/in/alexandracrvz">LinkedIn</Button>
        <Button size="small" href="https://github.com/alexandracrvz">Github</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default Contact;