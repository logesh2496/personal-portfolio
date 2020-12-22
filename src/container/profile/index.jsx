import React from "react";
import styled from "styled-components";
import Anchor from "../../components/anchor";

const gmail = "mailto:logesh.r24@gmail.com";
const linkedIn = "https://www.linkedin.com/in/logesh-rajappa/";
const twitter = "https://twitter.com/logeshr24";
const facebook = "https://www.facebook.com/r.l.esh.9/";
const github = "https://github.com/logesh2496";
const resume = "";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-family: "Roboto Mono";
`;
const ProfileWrapper = styled.div`
  width: 80%;
  min-height: 200px;
  max-height: 220px;
  background: white;
  border-radius: 6px;
  display: flex;
`;
const ProfilePicWrapper = styled.div`
  height: 100%;
  width: 30%;
`;
const ProfileInfo = styled.div`
  max-width: 70%;
  min-width: 40%;
  @media (max-width: 768px) {
    width: 22%;
    max-width: unset;
    min-width: unset;
    margin-left: auto;
    margin-right: 8px;
  }
  background: #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 25px 15px 25px;
`;
const SayHi = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Roboto Mono";
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;
const SocialInfo = styled.div``;
const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 65px;
`;

const Profile = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfilePicWrapper>
          <img
            src="./images/logesh-profile-pic.jpg"
            style={{ height: "100%" }}
          ></img>
        </ProfilePicWrapper>
        <ProfileInfo>
          <SayHi>Say hi👋</SayHi>
          <SocialInfo>
            <Anchor href={gmail} title="logesh.r24@gmail.com">
              Email
            </Anchor>
          </SocialInfo>
          <SocialInfo>
            <Anchor href={linkedIn}>LinkedIn</Anchor>
          </SocialInfo>
          <SocialInfo>
            <Anchor href={twitter}>Twitter</Anchor>
          </SocialInfo>
          <SocialInfo>
            <Anchor href={facebook}>Facebook</Anchor>
          </SocialInfo>
        </ProfileInfo>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Profile;
