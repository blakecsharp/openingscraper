import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { Container, Typography } from "@mui/material";

const GetOpenings = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    let url =
      "https://cors-anywhere.herokuapp.com/https://www.davidzwirner.com/exhibitions";

    let response = await fetch(url)
      .then(function (response) {
        switch (response.status) {
          // status "OK"
          case 200:
            return response.text();
          // status "Not Found"
          case 404:
            throw response;
        }
      })
      .then(function (template) {
        console.log(template);
      })
      .catch(function (response) {
        // "Not Found"
        console.log(response.statusText);
      });

    console.log("resp", response);
  };

  return (
    <Container maxWidth={false} disableGutters>
      Hey
      <Button onClick={handleClick}>Click me</Button>
    </Container>
  );
};

export default GetOpenings;
