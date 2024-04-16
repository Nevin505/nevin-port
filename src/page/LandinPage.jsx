import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Section from "../components/Section";
import PortfolioImage from "../Assets/PortfolioImage.jpg";
import Page from "../components/Page";
import Column from "../components/Column";
import Button from "../components/Button";
import Input from "../components/Input";
import IconButton from "../components/IconButton";
import LandingPageStyle from '../page/LandinPage.module.css'
import ParagraphIcon from "../components/ParagraphIcon";
import Projects from '../utils/Projects'
import WarningDetailsVaidatioin from "../components/WarningDetailsVaidatioin";

import { FaArrowCircleRight, FaDownload } from "react-icons/fa";
import OverlappingHeading from "../components/OverlappingHeading";
import Detail from "../components/Detail";
import skills from "../utils/Skills";


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

import NevinJohnResume  from '../Assets/NevinJohn.pdf';

const LandinPage = () => {

   const[errors,setErrors]=useState({});
   const form=useRef();
 
   const validate=(event)=>{
    const validErrors={};
    event.preventDefault();
    let regex="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const formData=new FormData(event.target);
    let userName=formData.get("user_name");
    let userMail=formData.get("user_email");
    let userSubject=formData.get("subject");
    let userMessage=formData.get("message");

  if(!userName.trim()){
    validErrors.userName="Enter The Name"
  }
  if(!userMessage.trim()){
    validErrors.userMessage="Message Can't Be Empty"
  }
  if(!userMail.trim()){
    validErrors.userMail="Email Can't Be Empty"
  }
  else if(!userMail.match(regex)){
    validErrors.userMail="Enter a Valid Email"
  }

    setErrors(validErrors);
  return Object.keys(validErrors).length===0;
   }


  const sendEmail = (event) => {
   const isFormValid=validate(event);
   console.log(errors);
    if(isFormValid){
    emailjs
    .sendForm('service_5m7lxie', 'template_op46vbq', form.current, {
      publicKey: 'nYoBk7vlPhmIsELts',
    })
    .then(
      () => {
       alert("Sucess")
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
   } 
   else{
    alert("Please Fill the Details")
   }
  };


 
   
  return (
    <>
      <NavBar/>
    <Page>
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
        <Row gapSize="largeGap">
          <Column>
          <Detail LabelName="First Name" candiateDetail="Nevin"></Detail>
          <Detail LabelName="Last Name" candiateDetail="John"></Detail>
          <Detail LabelName="Age" candiateDetail="24"></Detail>
          <Detail LabelName="Nationality" candiateDetail="Indian"></Detail>
          <Detail LabelName="Open To Work" candiateDetail="Yes"></Detail>
          </Column>
          <Column>
          <Detail LabelName="Address" candiateDetail="Nedungathara House"></Detail>
          <Detail LabelName="Place" candiateDetail="Thiruvalla,Kerala"></Detail>
          <Detail LabelName="Phone" candiateDetail="9495039249"></Detail>
          <Detail LabelName="Email" candiateDetail="nevinjohn63@gmail.com"></Detail>
          <Detail LabelName="Languages" candiateDetail="English , Malayalam, German"></Detail>
          </Column>

          <Column>
          <Detail LabelName="Internship" candiateDetail="ByteStrone Private Limted"></Detail>
          </Column>
        </Row>
        <div >
              <div style={{width:'max-content' ,marginInline: "auto" }}>
                <Button variantType="easeInButton" icon={ <FaDownload  size={36} />}>
                  <a href={NevinJohnResume}> DownLoad CV</a>
                 
                </Button>
              </div>
            </div>
      </Section>
      <Section>
         <h2 style={{textAlign:"center",color:"white"}}>MY SKILLS</h2>
         <Row gapSize="largeGap">
          {skills.map((skill)=>{
                return  <div className={LandingPageStyle.skillDiv} key={skill.id}>
                  <img src={skill.img} alt={skill.skillName}   />
                  <p style={{color:'var(--secondary)'}}>{skill.skillName}</p>
                 </div>
          })}
           
         </Row>
      </Section>
      <Section>
      <OverlappingHeading upperLayerContent="My" spanUpperLyer=" Portfolio" downLayerContent="Works"/>
      </Section>
      <Section>
      <Row gapSize="largeGap">
          {Projects.map((project, index) => {
            return (
              <div key={index} className={LandingPageStyle.projectSkillsCard}>
                <img src={project.imgs} alt={project.projectName} />
                <p>{project.projectName}</p>
                <p >Technologies Used:{project.technologies.map((tech)=><span style={{color:'var(--ternary)'}}>{tech},</span>)}</p>    
                <div className={LandingPageStyle.phover}>
                 <div className={LandingPageStyle.innerPhover} >    
                      <p className={LandingPageStyle.description}>
                      Description:{project.description}
                     </p> 
                     <Button> <a href={project.githubLink}>Git-hub</a></Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Section>
      <Section>
        <OverlappingHeading upperLayerContent="GET IN" spanUpperLyer="TOUCH " downLayerContent=" contact"></OverlappingHeading>
      </Section>
      <Section >
         <Row>
         <Column>
         <h1 style={{color:"white"}}>Social Medias</h1>
              <Row>
                <ParagraphIcon><IoMail/>nevinjohn63@gmail.com</ParagraphIcon>
                <ParagraphIcon><FaPhone/>+91 9495039249</ParagraphIcon>
              </Row>
              <Row>
                 <IconButton><a href="https://github.com/Nevin505"><FaGithub size={24}/></a></IconButton>
                 <IconButton><a href="https://www.linkedin.com/in/nevin-zachariah-john/"><FaLinkedin  size={24}/></a></IconButton>
                  <IconButton><a href=""><FaInstagram  size={24}/></a></IconButton>
               </Row>
            </Column>
              <form  ref={form} onSubmit={sendEmail}   style={{maxWidth:'38rem'}} >
              <Row>
                <Row>
                    <Column>
                       <Input placeholder="Yor Name" name="user_name" />
                       { errors?.userName && <WarningDetailsVaidatioin>{errors?.userName}</WarningDetailsVaidatioin>}
                     </Column>
                     <Column>
                      <Input placeholder="Your Email" type="email" name="user_email"  />
                       { errors?.userMail && <WarningDetailsVaidatioin>{errors?.userMail}</WarningDetailsVaidatioin>}
                    </Column>
                     <Input placeholder="Your Subject" name="subject" />
                </Row>
                  <Column>
                <Row>
                  <Input placeholder="Your Subject" textArea name="message" />
              {errors?.userMessage && <WarningDetailsVaidatioin>{errors?.userMessage}</WarningDetailsVaidatioin>}
               </Row>
             </Column>
              </Row>
              <Button variantType="easeInButton" type="submit">Send Mail</Button>
           
             </form>
         </Row>
      </Section>
      </Page>
    </>
  )
}

export default LandinPage;
