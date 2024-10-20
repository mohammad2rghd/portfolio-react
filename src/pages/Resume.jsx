import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
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
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />

            <DevExpTimeline loading={loading} />
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />

            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
