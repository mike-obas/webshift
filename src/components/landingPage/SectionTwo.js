import React from 'react'
import { Button, Typography } from "@mui/material";
import CustomStyles from '../../styles/landingPage/SectionTwo';

function SectionTwo() {
const Styles = CustomStyles(Button, Typography)

  return (
    <>
    <Styles.MiniContainer>
    <Styles.MarqueeWrapper>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
        <Styles.MarqueeText>The future of web is XR.</Styles.MarqueeText>
    </Styles.MarqueeWrapper>
    </Styles.MiniContainer>
    <Styles.Container>
        <Styles.TopSection>
        <Styles.TopSectionItem>
            <Styles.TopSectionImage src="/images/ativo-174.png" alt="top section first imaage" />
        </Styles.TopSectionItem>
        <Styles.TopSectionNoItem />
        <Styles.TopSectionNoItem />
        <Styles.TopSectionNoItem />
        <Styles.TopSectionItem>
        <Styles.TopSectionImage src="/images/ativo-175.png" alt="top section second image" />
        </Styles.TopSectionItem>
        <Styles.TopSectionNoItem />
        </Styles.TopSection>

        <Styles.MainSection>
            <Styles.ItemWrapper>
            <Styles.MainSectionItem>
                <Styles.ImageContainer>
                <Styles.MainSectionImage src="/images/ring.png" alt="main section image" />
                </Styles.ImageContainer>
            </Styles.MainSectionItem>
            </Styles.ItemWrapper>

            <Styles.ItemWrapper>
            <Styles.MainSectionItem>
                <Styles.LightTitle>Design and build the future of the internet.</Styles.LightTitle>
                <Styles.SubText>
                We believe that in the near future every website will have an AR/VR experience (Responsive XR; Responsive Reality) — a near identical adoption we saw with smartphones and responsive web. We’re here to accelerate this adoption by making building websites in XR intuitive, easy, and fun.
                </Styles.SubText>
            </Styles.MainSectionItem>
            <Styles.BottomItems>
                <Styles.JoinButton>JOIN OUR MOVEMENT</Styles.JoinButton>
                <Styles.BottomImageWrapper>
                  <Styles.BottomImage src="/images/atsis-1.png" alt="spring image" />
                </Styles.BottomImageWrapper>
                </Styles.BottomItems>
            </Styles.ItemWrapper>

        </Styles.MainSection>
    </Styles.Container>
    </>
  )
}

export default SectionTwo