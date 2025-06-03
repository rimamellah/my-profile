import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import "./project.css";
// import icons
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "wibsite programmed",
      description:
        "simple website programmed in HTML,CSS",
      photo:
        "proje-css-1.png",
      linkview: "https://rimamellah.github.io/proje-css-1/",
      linkgithub: "https://github.com/rimamellah/proje-css-1",
      tech: "htmlcss",
    },
    {
      id: 2,
      title: "wibsite programmed",
      description:
        "simple website programmed in HTML,CSS",
      photo:
        "proje-css-2.png",
      linkview: "https://rimamellah.github.io/proje-css-2/",
      linkgithub: "https://github.com/rimamellah/proje-css-2",
      tech: "htmlcss",
    },
    {
      id: 3,
       title: "wibsite programmed",
      description:
        "full responsive simple website programmed in Bootstarp",
      photo:
        "bootstarp-1.png",
      linkview: "https://rimamellah.github.io/proje-bootstrap-1/",
      linkgithub: "https://github.com/rimamellah/proje-bootstrap-1",
      tech: "bootstrap",
    },
    {
      id: 4,
      title: "wibsite programmed",
      description:
        "A full responsive website programmed in Bootstrap",
      photo:
        "bootstrap-2.png",
      linkview: "https://rimamellah.github.io/proje-bootstrap-2/",
      linkgithub: "https://github.com/rimamellah/proje-bootstrap-2",
       tech: "bootstrap",
    },
      {
      id: 5,
      title: "Arabic library",
      description:
        "Arabic lending library where new books can be added and deleted,programmed using React with a Supabase databese",
      photo:
        "firatkutuphanesi.png",
      linkview: "https://rimamellah.github.io/books_proje/",
      linkgithub: "https://github.com/rimamellah/books_proje",
      tech: "react",
    },
     {
      id: 6,
      title: "Personal Budget Planner",
      description:
        "Personal website for personal expense, programmed with HTML, CSS, JavaScript",
      photo:
        "public/personal.png",
      linkview: "https://rimamellah.github.io/personal-js/",
      linkgithub: "https://github.com/rimamellah/personal-js",
      tech: "htmlcssjs",
    },
    {
      id: 7,
      title: "x-o-play",
      description:
        "x - o, programmed with HTML, CSS, JavaScript",
      photo:
        "x-o.png",
      linkview: "https://rimamellah.github.io/x-o-js/",
      linkgithub: "https://github.com/rimamellah/x-o-js",
      tech: "htmlcssjs",
    },
    {
      id: 9,
      title: "to do list ",
      description:
        "Simple website for homework notes, programmed with HTML, CSS, JavaScript",
      photo:
        "todolist1.png",
      linkview: "https://rimamellah.github.io/to-do-list-1-js/",
      linkgithub: "https://github.com/rimamellah/to-do-list-1-js",
      tech: "htmlcssjs",
    },
       
     {
      id:11,
      title: "Buy books",
      description:
        "A simble site to buy books, programmed with HTML, CSS, JavaScript",
      photo:
        "public/shopping.png",
      linkview: "https://rimamellah.github.io/shooping-js/",
      linkgithub: "https://github.com/rimamellah/shooping-js",
      tech: "htmlcssjs",
    },
       {
      id: 8,
      title: "Quiz",
      description:
        "A simble website that question. programmed with HTML, CSS",
      photo:
        "quiz.png",
      linkview: "https://rimamellah.github.io/quiz-js/",
      linkgithub: "https://github.com/rimamellah/quiz-js",
      tech: "htmlcssjs",
    },
     {
      id: 10,
      title: "Task completion memo",
      description:
        "A simle website that expresses the memo of completing tasks, programmed with HTML, CSS, JavaScript",
      photo:
        "note.png",
      linkview: "https://rimamellah.github.io/to-do-list-2-js/",
      linkgithub: "https://github.com/rimamellah/to-do-list-2-js",
      tech: "htmlcssjs",
    },
    
  ];

  const [selectedTech, setSelectedTech] = React.useState("all");

  return (
    <>
      <section id="project">
        <Typography
          variant="h3"
          className="tools-skils"
          gutterBottom
          sx={{ textAlign: "center", color: "#5c6bc0", marginTop: "50px" }}
        >
          My Project
        </Typography>
        {/* toggle button */}
        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          {["all", "htmlcss", "bootstrap", "react","htmlcssjs"].map((category) => (
            <Grid item key={category}>
              <Button
                variant={selectedTech === category ? "contained" : "outlined"}
                color="primary"
                onClick={() => setSelectedTech(category)}
                sx={{
                  textTransform: "none",
                  padding: "10px 20px",
                  color:"white",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "htmlcss"
                    ? "HTML & CSS" 
                    : category === "bootstrap"
                      ? "Bootstrap"
                    : category === "react"
                      ? "React.js"
                      : "HTML, CSS, JS"}
              </Button>
            </Grid>
          ))}
        </Grid>
        {/*== toggle button ==*/}

        {/* card */}
        <Grid container spacing={2} justifyContent="center">
          {projects.filter(
            (project) => selectedTech === "all" || project.tech === selectedTech
          ).length === 0 ? (
            <Typography
              variant="h6"
              sx={{ color: "#ff5555", textAlign: "center", marginTop: "20px" }}
            >
              There are no projects for this section. Projects will be uploaded
              soon.
            </Typography>
          ) : (
            projects
              .filter(
                (project) =>
                  selectedTech === "all" || project.tech === selectedTech
              )
              .map((project) => (
                <Grid item xs={12} sm={6} md={3} key={project.id}>
                  <Card
                    className="card-project"
                    sx={{
                      maxWidth:"360px",
                   
                      transition: ".5s",
                      background: "#28307248",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.37)",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.photo}
                        alt="Project Image"
                      />
                     
                      <Divider
                        sx={{ backgroundColor: "#1976d2", marginTop: "5px" }}
                      />
                      <CardContent sx={{ textAlign: "left" }}>
                        <Typography variant="body2" sx={{ fontSize: "22px" }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "12px" }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{ justifyContent: "center", paddingBottom: "10px" }}
                    >
                      <Link href={project.linkgithub}>
                        <GitHubIcon
                          className="github-btn"
                          sx={{
                            transition: ".5s",
                            background: "#444",
                            borderRadius: "50px",
                            width: "60px",
                            height: "25px",
                            color: "#1976d2",
                          }}
                        />
                      </Link>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ background: "#ddd" }}
                      />
                      <Link href={project.linkview}>
                        <VisibilityIcon
                          className="eye-btn"
                          sx={{
                            transition: ".5s",
                            background: "#444",
                            borderRadius: "50px",
                            width: "60px",
                            height: "25px",
                            color: "#39aa3e",
                          }}
                        />
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))
          )}
        </Grid>
        <Divider
          sx={{
            backgroundColor: "#ddd",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        />
        {/*== card ==*/}
      </section>
    </>
  );
}
