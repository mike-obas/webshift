import { styled } from "@mui/material/styles";

const CustomStyles = (Button, Typography) => ({
     Container: styled("div")(({ theme }) => ({
        width: '100%',
        margin: "auto",
        height: "auto",
        borderBottom: "1px solid #FFFFFF",
        backgroundImage: "url(/images/bg-sm3.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up("sm")]: {
          height: "auto",
            backgroundImage: "url(/images/bg-lg3.png)",
          },
        [theme.breakpoints.up("md")]: {
          height: "auto",
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
    
       MainSection2: styled("div")(({ theme }) => ({
        height: 'auto',
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "30px",
        [theme.breakpoints.up("sm")]: {
          paddingTop: 0,
        }
      })),
    
       EachSection: styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
       height: 'auto',
        borderRight: "none",
        "&:first-of-type" : {
            order: 2
        },
        "&:last-of-type" : {
            order: 1
        },
        [theme.breakpoints.up("sm")]: {
            width: "50%",
            "&:not(:last-of-type)": {
                borderRight: "1px solid #FFFFFF",
              },
              "&:first-of-type" : {
                order: 1
            },
            "&:last-of-type" : {
                order: 2
            },
          },
      })),
    
       TextSection: styled("div")(({ theme }) => ({ 
        maxWidth: "450px",
        margin: "auto",
        padding: "25px 20px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
            padding: "150px 0px",
        }
      })),
    
       ButtonSection: styled("div")(({ theme }) => ({ 
        display: "flex",
        borderTop: "1px solid #FFFFFF",
        marginTop: "40px",
        [theme.breakpoints.up("sm")]: {
            marginTop: 0
        }
      })),
    
       BgArea: styled("div")(({ theme }) => ({ 
        display: "flex",
        height: "130px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: "#E4F22F",
        [theme.breakpoints.up("sm")]: {
            width: "70%",
            height: "200px",
        }
      })),

       NoBgArea: styled("div")(({ theme }) => ({ 
        borderLeft: "1px solid #FFFFFF",
        width: "30%",
        height: "200px",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
      })),
    
       MainSectionItem2: styled("div")(({ theme }) => ({ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "450px",
        margin: "auto",
        padding: "40px 20px",
        height: "auto",
        [theme.breakpoints.up("md")]: {
            padding: "80px 0px",
        }
      })),
    
       SectionImageContainer: styled("div")(({ theme }) => ({ 
        maxWidth: "250px",
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
            maxWidth: "400px",
        }
      })),
    
       TiltBorder: styled("span")(({ theme }) => ({
        width: "105%",
        height: "115px",
        borderRadius: "100%",
        position: "absolute",
        border: "0.5px solid #FFFFFF",
        transform: "rotate(-3.51deg)",
        top: -20,
        left: -15,
        right: 0,
        display: "none",
        [theme.breakpoints.up(950)]: {
            display: "block"
        },
        [theme.breakpoints.up(1100)]: {
            width: "115%",
            top: -20,
            left: -25,
        }
      })),
    
        LightTitle: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 400,
        lineHeight: "47px",
        fontSize: "40px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "54px",
            lineHeight: "50px",
          },
      })),
    
       DesktopSubText: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 300,
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "1px",
        textAlign: "left",
        marginTop: "30px",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
        lineHeight: "22px",
        display: "block"
          },
      })),
    
       MobileSubText: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 300,
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "1px",
        textAlign: "left",
        marginTop: "30px",
        display: "block",
        [theme.breakpoints.up("sm")]: {
            fontSize: "14px",
        lineHeight: "22px",
        display: "none"
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
      
     NoItemBox: styled("div")(({ theme }) => ({
        width: "16.76%",
        height: '100%',
        display: "none",
        "&:not(:last-of-type)": {
            borderRight: "1px solid #FFFFFF",
          },
        [theme.breakpoints.up("sm")]: {
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
          },
      }))
    
})

export default CustomStyles