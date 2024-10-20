import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { DevInfo, Skills, DevWorkCount } from "../components/pages";
import avatar from "../assets/avatar02.jpg";
import { CustomAvatar, CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
  const theme = useTheme();

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
        <Grid
          direction="row"
          sx={{
            justifyContent: "end",
            alignItems: "center",
          }}
          container
        >
          <Grid xs={4} sm={4} md={3} lg={4} container>
            <Grid
              xs={4}
              sm={4}
              md={3}
              lg={3}
              sx={{
                mt: 3,
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
              }}
            >
              <DevWorkCount />
            </Grid>

            <Grid xs={12} sm={8} md={9} lg={9}>
              <DevInfo />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />

            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
