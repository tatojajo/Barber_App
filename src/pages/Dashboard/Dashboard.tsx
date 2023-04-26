import React, { useState, useEffect } from "react";

import Barbercard from "../../components/BarberCard";
import { BarberCardType, BarberItem } from "../../@types/general";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { DashbordContainer, Title } from "./DashbordStyle";

const Dashboard = () => {
  const [data, setData] = useState<BarberCardType[]>([
    {
      id: '',
      firstName: "",
      lastName: "",
      rating: 0,
      review: [{ author: "", score: 0, comment: "" }],
      description: "",
      price: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);
  return (
    <DashbordContainer>
      <Title>
        <Typography variant="h1" color="initial" fontWeight="900" letterSpacing={2} fontSize='2.5rem'>
          Barbers
        </Typography>
      </Title>
      <div style={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr',
        gap:'10px',
        marginTop:'100px'
      }}>
        {data.map((barber) => {
          return <Barbercard key={barber.id} barber={barber} />;
        })}
      </div>
    </DashbordContainer>
  );
};

export default Dashboard;
