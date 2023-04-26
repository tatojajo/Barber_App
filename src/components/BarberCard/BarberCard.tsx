import React from "react";
import { BarberCardType } from "../../@types/general";
import { Avatar, Box, Typography } from "@mui/material";
import {
  LinkedIn,
  Facebook,
  Instagram,
  GitHub,
  StarBorderOutlined,
} from "@mui/icons-material";

import {
  BarberCardContainer,
  BarberFullName,
  Description,
  PriceRate,
  SocMedia,
} from "./BarberCardStyle";

const Barbercard = ({ barber }: BarberCardType) => {
  return (
    <BarberCardContainer  to={`/profile/${barber.id}`}>
      <Avatar sx={{ width: 80, height: 80, mt: 2 }} />
      <BarberFullName>
        <Typography variant="h4" color="initial">
          {barber.firstName}
        </Typography>
        <Typography variant="h4" color="initial" ml={1}>
          {barber.lastName}
        </Typography>
      </BarberFullName>
      <Box>
        <Description variant="subtitle2" color="initial">
          {barber.description}
        </Description>
      </Box>
      <SocMedia>
        <Avatar sx={{ width: 30, height: 30, bgcolor: "#0A66C2" }}>
          <LinkedIn />
        </Avatar>
        <Avatar sx={{ width: 30, height: 30, bgcolor: "#131418" }}>
          <GitHub />
        </Avatar>
        <Avatar sx={{ width: 30, height: 30, bgcolor: "#1877F2" }}>
          <Facebook />
        </Avatar>
        <Avatar sx={{ width: 30, height: 30, bgcolor: "#E4405F" }}>
          <Instagram />
        </Avatar>
      </SocMedia>
      <PriceRate>
        <Typography variant="h6" color="initial">
          <strong>Price:</strong> ${barber.price}
        </Typography>
        <Typography
          variant="h1"
          color="initial"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StarBorderOutlined />
          {barber.rating}
        </Typography>
      </PriceRate>
    </BarberCardContainer>
  );
};

export default Barbercard;
