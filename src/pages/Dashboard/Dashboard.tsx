import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState<BarberItem[]>([
    {
      id: '',
      firstName: '',
      lastName: '',
      rating: 0,
      review: [{ author: '', score: 0, comment: '' }],
      description: '',
      price: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
