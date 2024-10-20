import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { ShowCourses } from "../components/pages";

const Courses = ({ helmetTitle }) => {
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
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={<SchoolRounded />}
          align="center"
          text="پروژه های من"
        />

        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "end",
            alignItems: "center",
            mx: 1,
            mt: 2,
          }}
        >
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
