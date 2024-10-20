import { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// import { links } from "../constants/particles";
import bg05 from "../assets/bg05.jpeg";

const Home = ({ helmetTitle }) => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);

  const strings = [
    " توسعه دهنده فول استک هستم",
    " مدرس برنامه نویسی هستم",
    " محتواساز دنیای برنامه نویسی هستم",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد قلاوند"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg05})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      id="particles-container"
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%", // Match the size of the parent Box
          height: "100%", // Match the size of the parent Box
          zIndex: 1, // Make sure it stays behind the content
        }}
      /> */}
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" color="#F93C92">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="tomato"></Typography>

        <Typography variant="h3" color="#F93C92">
          {"}}"}
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <TextTransition springConfig={presets.wobbly}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              mt: 4,
              textDecoration: "underline",
              textDecorationColor: "#F93C92",
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>

        <Typography variant="h4" color="whitesmoke" sx={{ mt: 4, mr: 1 }}>
          من یک
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
