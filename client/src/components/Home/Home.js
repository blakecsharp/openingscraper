import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { GET_SHOWS } from "../../requests";

import { Container, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const {
    loading: dataLoading,
    error: dataError,
    data,
  } = useQuery(GET_SHOWS, {
    variables: {
      date: Date.now().toString(),
    },
  });

  console.log(data);

  const [values, setValues] = React.useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Container maxWidth={false} disableGutters>
      Hey
    </Container>
  );
};

export default Home;
