import React, { useEffect } from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { BarberItem } from "../../@types/general";
import {
  Avatar,
  Box,
  Card,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  Height,
  Home,
  KeyboardArrowDown,
  Padding,
  StarBorderOutlined,
} from "@mui/icons-material";
import { common } from "@mui/material/colors";

const ProfilePage = () => {
  const [open, setOpen] = React.useState(false);
  const [barber, setBarber] = useState<BarberItem>({});
  const { id } = useParams();

  const review = barber.review;
  useEffect(() => {
    const getBarber = async () => {
      const resp = await fetch("/data.json");
      const json = await resp.json();
      const barber = json.find((barber: BarberItem) => barber.id === id);
      setBarber(barber);
    };
    getBarber();
  }, [id]);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        height: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "150px",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
          padding: "10px",
        }}
      >
        <div>
          <Avatar />
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Typography variant="h4" color="initial">
            {barber.firstName}
          </Typography>
          <Typography variant="h4" color="initial">
            {barber.lastName}
          </Typography>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "grey",
          color: "white",
          padding: "20px",
        }}
      >
        <Typography variant="h6">
          <strong>Description: </strong>
          {barber.description}
        </Typography>
        <Typography variant="h6">
          <strong>Price: $</strong>
          {barber.price}
        </Typography>
        <Typography variant="h6" display="flex" alignItems="center">
          <strong>Rate: </strong>
          <StarBorderOutlined />
          {barber.rating}
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        {review?.map((eachreview) => (
          <Box
            key={eachreview.author}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">
              <strong>User: </strong>
              {eachreview.author}
            </Typography>
            <Typography variant="subtitle1">
              {" "}
              <strong>Comment: </strong>
              {eachreview.comment}
            </Typography>
            <Typography display="flex" alignItems="center" variant="h5">
              {eachreview.score}
              <StarBorderOutlined />
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default ProfilePage;
