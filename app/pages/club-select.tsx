/** @jsxImportSource react */
import React from "react";
import { Button } from "frog";

const SelectClubPage = (c: any) => {
  const { buttonValue } = c;

  // Handle the selection of the clubs
  if (buttonValue === "flexclub001") {
    return c.res({
      redirect: "/api/select-club?club=flexclub001",
    });
  }

  if (buttonValue === "flexclub002") {
    return c.res({
      redirect: "/api/select-club?club=flexclub002",
    });
  }

  // Default Club Selection Screen
  return c.res({
    image: (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(to right, #432889, #17101F)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 40,
            marginBottom: 20,
          }}
        >
          Select a Club
        </div>
      </div>
    ),
    intents: [
      // Frog Button Intents
      <Button value="flexclub001">Flexclub 1: Devcon Bangkok</Button>,
      <Button value="flexclub002">Flexclub 2: Farcon 2025</Button>,
    ],
  });
};

export default SelectClubPage;
