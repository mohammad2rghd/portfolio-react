import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : محمد قلاوند</Info>
      <Info>سن : 29</Info>
      <Info>شهر : تهران</Info>
      <Info>mohammad2rghdd@gmail.com : آدرس ایمیل</Info>
      <Info>شماره موبایل : </Info>
    </>
  );
};

export default DevInfo;
