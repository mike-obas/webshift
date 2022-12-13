import React from 'react'
import { Button, Typography } from "@mui/material";
import CustomStyles from '../../styles/landingPage/SectionThree';

const noBorderRight = {
  borderRight: "none"
}

 const centeredParent = {
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
}

const containImage = {
  height: "75%", 
  width: "75%", 
  objectFit: "contain"
}

const miniContainImage = {
    height: "60%", 
    width: "60%", 
    objectFit: "contain"
}
const tiltBorderText = {
    position: "relative",
    textAlign: "center",
    marginTop: "80px"
}

function SectionThree() {
const Styles = CustomStyles(Button, Typography)

  return (
    <>
    <Styles.Container>
        <Styles.TopSection style={{borderTop: "1px solid #FFFFFF"}}>
        <Styles.TopSectionItem style={centeredParent}>
            <Styles.TopSectionImage style={containImage} src="/images/dots.png" alt="top section image" />
        </Styles.TopSectionItem>
        <Styles.TopSectionNoItem />
        <Styles.NoItemBox>
        <Styles.TopSectionImage style={miniContainImage} src="/images/angle-vector.png" alt="top section second image" />
        </Styles.NoItemBox>
        <Styles.TopSectionNoItem style={noBorderRight} />
        <Styles.TopSectionNoItem />
        <Styles.TopSectionItem style={noBorderRight}>
        <Styles.TopSectionImage src="/images/ativo-176.png" alt="top section image" />
        </Styles.TopSectionItem>
        </Styles.TopSection>

        <Styles.MainSection2>
            <Styles.EachSection>
            <Styles.TextSection>
            <Styles.LightTitle>Our mission is to bring the entire web to XR</Styles.LightTitle>
            <Styles.MobileSubText>
                We’re looking for the best designers, engineers, and free-thinkers to help define the future of The Internet and help bring our vision of XR to reality. If this is you, please consider joining our movement.
                </Styles.MobileSubText>
            </Styles.TextSection>
            <Styles.ButtonSection>
            <Styles.BgArea><Styles.JoinButton style={{color: "#1A1A1A", border: "1px solid #1A1A1A"}}>JOIN OUR MOVEMENT</Styles.JoinButton></Styles.BgArea>
            <Styles.NoBgArea />
            </Styles.ButtonSection>
            </Styles.EachSection>

            <Styles.EachSection>
            <Styles.MainSectionItem2>
                <Styles.SectionImageContainer>
            <Styles.TopSectionImage style={{objectFit: "contain"}} src="/images/ativo-322.png" alt="section image" />
            </Styles.SectionImageContainer>
                <Styles.DesktopSubText style={tiltBorderText}>
                We’re looking for the best designers, engineers, and free-thinkers to help define the future of The Internet and help bring our vision of XR to reality. If this is you, please consider joining our movement.
                <Styles.TiltBorder />
                </Styles.DesktopSubText>
            </Styles.MainSectionItem2>
            </Styles.EachSection>

        </Styles.MainSection2>
    </Styles.Container>
    </>
  )
}

export default SectionThree