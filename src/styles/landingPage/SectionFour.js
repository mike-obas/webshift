import { styled } from "@mui/material/styles";

const CustomStyles = (Typography) => ({
     SectionFourContainer: styled("div")(({ theme }) => ({
        position: "relative",
        width: "100%"
      })),
    
       MainBgImageArea: styled("div")(({ theme }) => ({
        width: '100%',
        margin: "auto",
        position: "relative",
        //padding: "20px",
        height: "400px",
        backgroundImage: "url(/images/webshifttestsbg2.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up(700)]: {
            //height: "120vh",
            height: "560px",
            backgroundImage: "url(/images/webshifttestsbg1.png)",
            //padding: "40px 0px",
          },
      })),
    
       OtherBgImageArea: styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        margin: "auto",
        //padding: "20px",
        height: "180px",
        borderTop: "1px solid #FFFFFF",
        backgroundImage: "url(/images/final52.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        [theme.breakpoints.up(700)]: {
            height: "300px",
            backgroundImage: "url(/images/final5.png)",
          },
      })),
    
       FirstImage: styled("img")(({ theme }) => ({
        zIndex: 10,
        position: "absolute",
        top: -85,
        right: 0,
        width: "100%",
        height: "100%",
        objectFit: 'cover',
        [theme.breakpoints.up(700)]: {
          top: -125,
        }
      })),
      
       FadedTextContainer: styled("div")(({ theme }) => ({
        width: "985px",
        Margin: "auto",
        height: "100%",
        padding: "20px 0px",
        display: "flex",
        alignItems: "center",
      })),
    
       OtherImage: styled("img")(({ theme }) => ({
        zIndex: 4,
        position: "absolute",
        top: "51%",
        left: "50%",
        width: "40%",
        height: "50%",
        objectFit: 'contain',
        [theme.breakpoints.up(700)]: {
          top: "58%",
        width: "30%",
        height: "40%",
        }
      })),
    
       SecondImage: styled("img")(({ theme }) => ({
        position: "absolute",
        bottom: -60,
        left: "0%",
        width: "40%",
        height: "50%",
        objectFit: 'contain',
        [theme.breakpoints.up(700)]: {
          bottom: 0,
          width: "30%",
        height: "40%",
          left: "23%",
        }
      })),
    
       FadedTextArea: styled("div")({
        paddingRight: "25px",
        display: "flex",
        flexDirection: "column"
      }),
    
       Eclipse: styled("div")(({ theme }) => ({
        position: "absolute",
        width: "260px",
        height: "260px",
        borderRadius: "100%",
        top: "35%",
        left: "15%",
        zIndex: 2,
        background: "linear-gradient(180deg, #B777F6 0%, rgba(183, 119, 246, 0) 100%), rgba(183, 119, 246, 0.6)",
        [theme.breakpoints.up(700)]: {
          top: "15%",
        width: "350px",
        height: "350px",
        left: "45%",
        },
        [theme.breakpoints.up(900)]: {
          width: "450px",
          height: "450px",
          left: "50%",
        }
      })),
    
       FirstShapeImage: styled("img")(({ theme }) => ({
      position: "absolute",
      top: "40%",
      left: "15%",
      width: "200px",
      height: "200px",
      objectFit: "contain",
      [theme.breakpoints.up(700)]: {
        left: "10%",
        width: "300px",
      height: "300px",
      },
      [theme.breakpoints.up(900)]: {
        left: "12%",
        top: "45%",
      }
      })),
    
       SecondShapeImage: styled("img")(({ theme }) => ({
        zIndex: 5,
        position: "absolute",
        top: "35%",
        left: "20%",
        width: "252px",
        height: "300px",
        objectFit: "contain",
        [theme.breakpoints.up(700)]: {
          width: "302px",
          top: "30%",
        left: "44%",
        height: "500px",
        },
        [theme.breakpoints.up(900)]: {
          width: "382px",
        height: "530px",
        }
        })),
    
         ThirdShapeImage: styled("img")(({ theme }) => ({
          zIndex: -1,
          position: "absolute",
          top: "30%",
          left: "15%",
          width: "200px",
          height: "290px",
          objectFit: "contain",
          [theme.breakpoints.up(700)]: {
            top: "68%",
            left: "10%"
          },
          [theme.breakpoints.up(900)]: {
            width: "300px",
          height: "490px",
          left: "-15%",
          }
          })),
    
           FinalImage: styled("img")(({ theme }) => ({
          zIndex: 16,
          position: "absolute",
          bottom: "0%",
          overflow: "hidden",
          left: "0%",
          width: "300px",
          height: "auto",
          objectFit: "contain",
          [theme.breakpoints.up(350)]: {
            left: "2%",
          },
          [theme.breakpoints.up(500)]: {
            left: "9%",
          },
          [theme.breakpoints.up(700)]: {
            left: "20%",
            width: "auto",
          height: "auto",
          },
          [theme.breakpoints.up(900)]: {
            left: "28%",
          }
          })),
    
        FadedText: styled(Typography)(({ theme }) => ({
          lineHeight: "20px",
          color: "rgba(255, 255, 255, 0.7)",
          mixBlendMode: "overlay",
          fontSize: "20px",
          fontWeight: 400,
        [theme.breakpoints.up(700)]: {
          fontSize: "37px",
          lineHeight: "47px",
          },
      }))
})

export default CustomStyles