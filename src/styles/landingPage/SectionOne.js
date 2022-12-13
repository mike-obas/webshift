import { styled } from "@mui/material/styles";

const CustomStyles = (Typography) => ({
     Container: styled("div")(({ theme }) => ({
        width: '100%',
        margin: "auto",
        padding: "20px",
        height: "800px",
        backgroundImage: "url(/images/section-one-sm.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up("sm")]: {
            height: "120vh",
            backgroundImage: "url(/images/section-one-lg.png)",
            padding: "40px 100px",
          },
      })),
    
       LogoContainer: styled("div")({
        width: '240px',
        height: 'auto',
      }),
    
     Logo: styled("img")({
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: 'contain'
      }),
      
      TextWrapper: styled("div")(({ theme }) => ({
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginTop: "80px",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "center",
            marginTop: 0,
          },
      })),
    
      TitleWrapper: styled("div")({
        maxWidth: "460px",
        paddingBottom: "30px"
      }),

      SubTextWrapper: styled("div")({
        maxWidth: "400px",
      }),
    
       TitleText: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontWeight: 700,
        lineHeight: "45px",
        fontSize: "45px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "62px",
            lineHeight: "69px",
          },
      })),
    
      SubText: styled(Typography)(({ theme }) => ({
        color: '#ffffff',
        fontFamily: "Roboto",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "1px"
      }))
})
export default CustomStyles