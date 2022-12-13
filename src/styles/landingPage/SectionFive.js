import { styled } from "@mui/material/styles";

const CustomStyles = (Button, Link) => ({

     SectionFiveContainer: styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "80px 20px 20px",
        left: "0px",
        top: "3771px",
        background: "#1A1A1A",
        width: "100%",
        [theme.breakpoints.up(700)]: {
            padding: "80px 100px 20px",
        }
      })),
    
       EachRow: styled("div")(({ theme }) => ({
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
        "&:first-of-type": {
            marginBottom: "50px"
        },
        [theme.breakpoints.up(700)]: {
            justifyContent: "space-between",
        }
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
    
       MyForm: styled("form")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "40px",
        [theme.breakpoints.up(700)]: {
            display: "block",
            width: "50%", 
            marginTop: 0
        }
      })),
    
       MyInputGroup: styled("div")({
        position: "relative",
        width: "100%",
        paddingLeft: "20px",
        display: "flex",
        alignContent: "center",
        justifyContent: 'space-between',
        border: "1px solid #FFFFFF",
    borderRadius: "100px",
      }),
    
       MyInput: styled("input")(({ theme }) => ({
        backgroundColor: "transparent",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "22px",
        letterSpacing: "1px",
        color: "white",
        border: "none",
        padding: "13px",
        width: "100%",
      "&:focus": {
        border: "none",
        outline: "none",
      },
      [theme.breakpoints.up("sm")]: {
        width: "75%",
      }
      })),
    
       InputButton: styled(Button)(({ theme }) => ({
        background: "none",
      borderLeft: "1px solid #FFFFFF",
      borderRadius: "100px",
      fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "1px",
        textAlign: "center",
        fontWeight: 400,
        padding: "7px 15px",
        color: "#FFFFFF",
        "&:hover": {
          opacity: 0.9,
        },
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
          fontSize: "17px",
          lineHeight: "22px",
          },
      })),
    
       CopyRight: styled("span")(({ theme }) => ({
        display: "block",
        fontSize: "12px",
        fontWeight: 300,
        fontFamily: "Roboto",
    lineHeight: "43px",
    color: "#ACACAC",
    [theme.breakpoints.up(700)]: {
        lineHeight: "73px",
    }
      })),
    
       FooterLinks: styled("div")({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }),
    
       FooterLink: styled(Link)(({ theme }) => ({
        display: "block",
        textDecoration: "none",
        fontSize: "12px",
        fontWeight: 300,
        fontFamily: "Roboto",
        lineHeight: "43px",
        color: "#ACACAC",
        "&:hover": {
            color: "#FFFFFF"
        },
        "&:not(:last-of-type)": {
            paddingRight: "15px"
        },
        [theme.breakpoints.up(350)]: {
            "&:not(:last-of-type)": {
                paddingRight: "30px"
            }
        },
        [theme.breakpoints.up(700)]: {
            lineHeight: "73px",
        }
      }))
})

export default CustomStyles