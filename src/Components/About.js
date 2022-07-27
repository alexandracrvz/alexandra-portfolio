import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import img1 from '../Images/Portfolio.jpeg';
import img2 from '../Images/Athenaeum.jpeg';
import img3 from '../Images/Tracker.png';
import img4 from '../Images/APHELEIA.jpeg';

function About() {
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
            Welcome!
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
          I am Alexandra Cruz, a Software Engineer with a background in customer relations. 
          I use my patience and natural curiosity to develop clean and scalable 
          code. My attention to detail allows me to analyze code and modify 
          software programs to improve performance. I bring my passion for 
          determining design specifications and resolving information technology 
          issues into each collaborative project. My background in customer 
          relations and my experience in a high-pressure environment allows 
          me to consult with customers or other departments on project status, 
          proposals, or technical issues such as software system design or 
          maintenance.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 1 }}>
        <img src="" />
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            color="#F2735B"
          >
            Skills
          </Typography>
          <Typography
            align="center"
            gutterBottom
            variant="body1"
            component="div"
            color="text.secondary"
          >
            Full-Stack Development
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            AJAX | CSS | Express.js | Git | Github | HTML | JavaScript | jQuery
            | JSON | MongoDB | Node.js | Python | React.js | SQL
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 1 }}>
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            color="#F2735B"
          >
            Projects
          </Typography>
        </CardContent>
      </Card>

    
      
        
    <Grid container
  direction="column">
    <Card sx={{ width: 1 }}>
    <center><img src={img4} /></center>
    <CardActionArea href="http://apheleiashop.netlify.app">
      <CardContent>
        <center><Typography gutterBottom variant="h5" component="div" color="#539165">
          APHELEIA
        </Typography></center>
        <Typography variant="body2" color="text.secondary">
        <center>APHELEIA is a modern E-Commerce website created using React.js, 
            and Commerce.js. <br />It is designed for users to browse available
            items, add them to their cart. <br />Beta 2 will allow users to 
            purchase the items in their cart.</center>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  

  <Card sx={{ width: 1 }}>
  <center><img src={img3}/></center>
  <CardActionArea href="https://team2-tracker.github.io/tracker-client/">
      <CardContent>
        <center><Typography gutterBottom variant="h5" component="div" color="#539165">
          Tracker
        </Typography></center>
        <Typography variant="body2" color="text.secondary">
        <center>An interactive app that tracks Bugs/Issues and can assign 
            them to users for comments and resolution. A clean, modern 
            interface using MUI components and reactive styling to 
            provide a seamless mobile-first experience. Collaborative development by Shanti Betts,
           Irais Avila, Alex Becker, and myself.</center>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  {/* <Card sx={{ maxWidth: 1 }}>
  <img src={img2}/>
  <CardActionArea href="https://alexandracrvz.github.io/film_app/">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#56B77E">
          Athenauem
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Beta 1: This Film App called "Athenaeum" allows users to search 
            for a film then be provided with the film's title, poster, genre, and 
             synopsis by fetching the information from the OMDb API. <br />Beta 2 (Under Construction): The 
             goal will be to allow the user to add their favorite films to a list 
            by clicking the "Add to Favorites" button. This App will be useful for 
             film lovers with a desire to be able to easily access a library of films 
            that they love.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card> */}

  <Card sx={{ width: 1 }}>
  <center><img src={img1}/></center>
  <CardActionArea href="https://alexandracrvz.github.io/Portfolio/">
      <CardContent>
      <center><Typography gutterBottom variant="h5" component="div" color="#539165">
          Portfolio Website
        </Typography></center>
        <Typography variant="body2" color="text.secondary">
        <center>3 weeks after learning to code I created a personal portfolio. 
               The portfolio is a website showcasing myself, skills, 
               and contact information as a Software Engineer much like this one. 
               I had no other projects at the time, so I left images as placeholders. 
               My skills were updated as I gained new ones.
               Anyone visiting my portfolio website is able to interact with 
              my content and get familiar with who I am as well as the skills, and 
               ideas I have to bring to the table as a developer.</center>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</Grid>
</Grid>

);
}

export default About;
