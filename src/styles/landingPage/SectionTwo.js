import { styled } from "@mui/material/styles";

const CustomStyles = (Button, Typography) => ({
     MiniContainer: styled("div")(({ theme }) => ({
        width: '100%',
        margin: "auto",
        height: "50px",
        backgroundImage: "url(/images/section-two-lg1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        overflow: "hidden",
        position: "relative"
      })),
    
     Container: styled("div")(({ theme }) => ({
        width: '100%',
        margin: "auto",
        height: "auto",
        backgroundImage: "url(/images/bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up("sm")]: {
          height: "950px",
            backgroundImage: "url(/images/section-two-lg2.png)",
          },
        [theme.breakpoints.up("md")]: {
          height: "900px",
          },
      })),
      
       MarqueeWrapper: styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        width: "200%",
        height: "55px",
        position: "absolute",
        overflow: "hidden",
        animation: "marquee 15s linear infinite",
        "@keyframes marquee": {
            "0%": { left: 0 },
            "100%": { left: "-100%" }
          }
      })),
    
       MarqueeText: styled("pre")(({ theme }) => ({
        fontFamily: "Play",
        fontWeight: "700",
        fontSize: "22px",
        lineHeight: "58px",
        letterSpacing: "1px",
        color: "#201C21",
        float: "left",
        width: "50%",
        "&:nth-of-type(n+3)": {
            display: "none"
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "26px",
            "&:nth-of-type(n+3)": {
                display: "block"
              },
          },
      })),
    
       TopSection: styled("div")(({ theme }) => ({
        display: "flex",
        height: "188px",
        borderBottom: "1px solid #FFFFFF",
        [theme.breakpoints.up("sm")]: {
          height: "210px",
        }
      })),

       TopSectionItem: styled("div")(({ theme }) => ({
        width: "50%",
        height: '100%',
        "&:not(:last-of-type)": {
            borderRight: "1px solid #FFFFFF",
          },
        [theme.breakpoints.up("sm")]: {
            width: "16.6%",
            "&:last-of-type": {
                borderRight: "1px solid #FFFFFF",
              },
          },
      })),

       TopSectionNoItem: styled("div")(({ theme }) => ({
        width: "16.76%",
        height: '100%',
        display: "none",
        "&:not(:last-of-type)": {
            borderRight: "1px solid #FFFFFF",
          },
        [theme.breakpoints.up("sm")]: {
            display: "block"
          },
      })),
    
       TopSectionImage: styled("img")({
        width: "100%",
        height: "100%",
        objectFit: 'cover'
      }),
    
       MainSection: styled("div")(({ theme }) => ({
        height: 'auto',
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "30px",
        [theme.breakpoints.up("sm")]: {
          paddingTop: 0,
          height: "100%",
        }
      })),
    
       ItemWrapper: styled("div")(({ theme }) => ({
        width: "100%",
        height: '100%',
        padding: "30px 20px 0px",
        borderRight: "none",
        [theme.breakpoints.up("sm")]: {
          padding: "105px 20px",
            width: "50%",
            "&:not(:last-of-type)": {
                borderRight: "1px solid #FFFFFF",
              },
          },
      })),
    
       MainSectionItem: styled("div")({
        maxWidth: "460px",
        margin: "auto",
        height: "auto",
      }),
    
       ImageContainer: styled("div")(({ theme }) => ({
        maxWidth: "250px",
        height: "100%",
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "350px",
          },
      })),
    
       MainSectionImage: styled("img")({
        width: "100%",
        height: "100%",
        objectFit: 'contain'
      }),

        LightTitle: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 400,
        lineHeight: "47px",
        fontSize: "40px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "54px",
            lineHeight: "55px",
          },
      })),
    
       SubText: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 300,
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "1px",
        textAlign: "left",
        marginTop: "30px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
        lineHeight: "22px",
          },
      })),
    
       BottomItems: styled("div")(({ theme }) => ({
        //marginTop: "70px",
        display: "flex",
        maxWidth: "450px",
        flexWrap: "wrap",
        margin: "50px auto 30px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        [theme.breakpoints.up("sm")]: {
          flexWrap: "nowrap",
        },
        [theme.breakpoints.up("lg")]: {
          margin: "70px auto 0px",
          paddingLeft: "70px",
          maxWidth: "600px",
          },
      })),
    
       JoinButton: styled(Button)(({ theme }) => ({
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "1px",
        textAlign: "center",
        fontWeight: 400,
        width: "204px",
        padding: "7px 15px",
        color: "#E7FD7D",
        border: "1px solid #E7FD7D",
        borderRadius: "100px",
        background: "none",
        "&:hover": {
          opacity: 0.9,
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "17px",
          lineHeight: "22px",
          },
      })),
    
       BottomImageWrapper: styled("div")(({ theme }) => ({
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        maxHeight: "208px",
        [theme.breakpoints.up("sm")]: {
          maxWidth: "200px",
          maxHeight: "208px"
          },
      })),
    
       BottomImage: styled("img")(({ theme }) => ({
        height: "100%",
        maxWidth: "108px",
        objectFit: "contain",
        [theme.breakpoints.up("md")]: {
          maxWidth: "200px"
          },
      }))
})

export default CustomStyles