import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Section from "../components/Section";
import PortfolioImage from "../Assets/PortfolioImage.jpg";
import Page from "../components/Page";
import Column from "../components/Column";
import Button from "../components/Button";

import LandingPageStyle from '../page/LandinPage.module.css'

import { FaArrowCircleRight, FaDownload } from "react-icons/fa";
import OverlappingHeading from "../components/OverlappingHeading";

const LandinPage = () => {
  return (
    <>
    <Page>
      <NavBar/>
      <Section>
        <Row gapSize="largeGap">
            <div className={LandingPageStyle.rightSectionImageDiv}>
                <img src={PortfolioImage} alt="" />
            </div>   
            <div className={LandingPageStyle.rightSectionSecondDiv}>
            <Column variantType="largeGap">
              <h1 className={LandingPageStyle.headingStyle}>
                -- I'M NEVIN ZACHARIAH JOHN.
              </h1>
              <h2 className={LandingPageStyle.subheadingStyle}>FULL STACK DEVELOPER</h2>
              <p className={LandingPageStyle.pStyle}>
                Hello there! 👋 , a passionate and dedicated full-stack
                developer on a mission to create seamless, user-friendly digital
                experiences. I thrive in the dynamic world of web development,
                where every line of code is an opportunity to innovate.
              </p>
              <div className={LandingPageStyle.buttonStyle}>
                <Button
                  variantType="easeInButton"
                  icon={<FaArrowCircleRight size={40} />}
                  ClickEventHandler={() => {
                    return (window.location = "#aboutMe");
                  }}
                >
                  More About Me
                </Button>
              </div>
            </Column>
          </div>
        </Row>
      </Section>
      <Section>
        <OverlappingHeading upperLayerContent="About" spanUpperLyer=" Me" downLayerContent="Resume"/>
      </Section>
      <Section gapType="mediumPadding">
        <h1 style={{textAlign:"start",color:'var(--ternary)'}}>Personal Infos</h1>

        <Row>
          
        </Row>
      </Section>
      </Page>
    </>
  )
}

export default LandinPage
