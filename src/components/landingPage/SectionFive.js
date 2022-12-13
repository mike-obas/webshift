import React from 'react'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomStyles from '../../styles/landingPage/SectionFive';



const currentDate = new Date()

function SectionFive() {
  const Styles = CustomStyles(Button, Link)
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const secondInputBtn = {
        border: "1px solid #FFFFFF",
        display: isSmallScreen ? "block" : "none",
        width: "200px",
        marginTop: "20px",
    }
  return (
    <Styles.SectionFiveContainer>
        <Styles.EachRow>
        <Styles.LogoContainer>
            <Styles.Logo src={"/images/logo.png"} alt={"Webshift logo"} />
        </Styles.LogoContainer>

<Styles.MyForm>
  <Styles.MyInputGroup>
    <Styles.MyInput type="text" placeholder="Email here" />
    <Styles.InputButton>JOIN OUR MOVEMENT</Styles.InputButton>
  </Styles.MyInputGroup>
  <Styles.InputButton style={secondInputBtn}>JOIN OUR MOVEMENT</Styles.InputButton>
</Styles.MyForm>
</Styles.EachRow>

<Styles.EachRow>
<Styles.CopyRight>Copyright {currentDate.getFullYear()} Webshift. All Rights Reserved</Styles.CopyRight>
<Styles.FooterLinks>
    <Styles.FooterLink to="/">Terms of Service</Styles.FooterLink>
    <Styles.FooterLink to="/">Privacy Policy</Styles.FooterLink>
    <Styles.FooterLink to="/">Cookie Policy</Styles.FooterLink>
</Styles.FooterLinks>  
</Styles.EachRow>


    </Styles.SectionFiveContainer>
  )
}

export default SectionFive