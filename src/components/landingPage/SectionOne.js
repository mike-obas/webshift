import React from 'react'
import { Typography } from "@mui/material";
import CustomStyles from '../../styles/landingPage/SectionOne';

function SectionOne() {

  const Styles = CustomStyles(Typography)

  return (
    <Styles.Container>
        <Styles.LogoContainer>
            <Styles.Logo src={"/images/logo.png"} alt={"Webshift logo"} />
        </Styles.LogoContainer>

        <Styles.TextWrapper>
            <Styles.TitleWrapper>
        <Styles.TitleText>
        The easiest way to build XR websites.
        </Styles.TitleText>
        </Styles.TitleWrapper>

        <Styles.SubTextWrapper>
        <Styles.SubText>
        Webshift empowers designers and developers to build immersive AR/VR websites in a completely visual canvas - no coding needed. 
        </Styles.SubText>
        </Styles.SubTextWrapper>
        </Styles.TextWrapper>
    </Styles.Container>
  )
}

export default SectionOne