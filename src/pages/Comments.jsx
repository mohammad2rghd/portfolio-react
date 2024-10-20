import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
  const theme = useTheme();

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
          bColor="success.main"
          cColor="success"
          icon={<ForumRounded />}
          align="center"
          text="نظ‍رات "
        />
        <CommentsSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
