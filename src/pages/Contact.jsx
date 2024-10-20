import { useState, useEffect } from "react";

import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { Helmet } from "react-helmet-async";

import { CustomDivider } from "../components/common";
import worldMap from "../assets/map.svg";
import { ContactForm } from "../components/pages";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? "#6272A4" : "#F8F8F2",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="warning.main"
          cColor="warning"
          icon={<AccountCircle />}
          align="center"
          text="ارتباط با من"
        />
      </CardContent>
    </Card>
  );
};

export default Contact;
