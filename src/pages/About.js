import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Laxmi Trading Company</Typography>
        <p>
          Laxmi Trading Company is the leading trader of maize, wheat and Potato
          in Etah District of Uttar Pradesh.The Company is started at 2011.The
          Head office of the company is at aliganj road, Sarai Agahat front of
          jio office.One branch of Laxmi Trading Company is at Aliganj Road
          Sarai Agahat in front of Khatu Shyam Dharmkata.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
    </Layout>
  );
};

export default About;