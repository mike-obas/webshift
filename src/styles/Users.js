import { styled } from "@mui/material/styles";

const CustomStyles = (Paper, Typography, Grid) => ({
     PageContent: styled("div")({
        maxWidth: 1200,
        padding: "20px 20px",
        margin: "auto",
      }),
    
      UserCard: styled(Grid)({
        padding: "20px 0px",
        maxWidth: "600px",
        margin: "auto",
      }),

      PaginationContainer: styled("div")({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "800px",
        margin: "0px auto 20px",
        flexWrap: "wrap"
      }),
      
       Item: styled(Paper)(({ theme }) => ({
        padding: "15px",
        [theme.breakpoints.down("sm")]: {
          padding: 10,
        },
      })),
      
      UserCardContent: styled("div")({
        display: "flex"
      }),
      
     ImageContainer: styled("div")({
        width: '100%',
        height: "auto",
      }),
      
       Image: styled("img")({
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: 'contain'
      }),
      
       TextContainer: styled('div')({
        width: '100%'
      }),
      
      UsernameText: styled(Typography)(({ theme }) => ({
        textAlign: "left",
        textTransform: "capitalize",
        ...theme.typography.subtitle1,
        color: theme.palette.text.primary,
        fontWeight: 500,
        fontFamily: "Roboto"
      })),
})

export default CustomStyles