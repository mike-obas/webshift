import React from 'react'
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomStyles from '../../styles/landingPage/SectionFour';


function SectionFour() {
  const Styles = CustomStyles(Typography)
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  return (
    <Styles.SectionFourContainer>
      <Styles.MainBgImageArea>
      <Styles.SecondImage src="/images/final3.png" alt="comp image" />
      </Styles.MainBgImageArea>
      <Styles.OtherBgImageArea>
        <Styles.FadedTextContainer>
          <Styles.FadedTextArea>
          <Styles.FadedText>The future of web is XR.</Styles.FadedText>
          <Styles.FadedText>The future of web is XR.</Styles.FadedText>
          <Styles.FadedText>The future of web is XR.</Styles.FadedText>
          <Styles.FadedText>The future of web is XR.</Styles.FadedText>
          </Styles.FadedTextArea>
        </Styles.FadedTextContainer>
      </Styles.OtherBgImageArea>

      <Styles.FirstImage src={isSmallScreen ? "/images/22testeswebshift2.png" : "/images/final6.png"} alt="comp image" />
      <Styles.Eclipse> 
        <Styles.FirstShapeImage src="/images/vector3.png" alt="shape image" /> 
        <Styles.ThirdShapeImage src="/images/vector4.png" alt="Another shape" />
        </Styles.Eclipse>
        <Styles.OtherImage src="/images/final2.png" alt="comp image" />
        <Styles.SecondShapeImage src="/images/final1.png" alt="shape image" />
        <Styles.FinalImage src={isSmallScreen ? "/images/comp-92.png" : "/images/comp-912.png"} alt="shape image" />
    </Styles.SectionFourContainer>
  )
}

export default SectionFour