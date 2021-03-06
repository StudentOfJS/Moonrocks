import * as React from 'react';
import styled from "../../theme";
import { MinorTitle, Paragraph, SubTitle } from "../Text";

const CookiePolicyDocument = styled.div`
  align-items: flex-start;
  background: hsla(170, 0%, 10%, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: flex-start;
  padding: 80px 5%;
  width: 100%
`
const CookieList = styled.ul`
  border-radius: 8px;
  box-shadow: inset 2px 2px white;
  list-style: none;
`

const CookieListItem = styled.li`
  border: 2px solid white;
  border-radius: 8px;
  list-style: none;
`

const CookiePolicy: React.SFC = () => {
  return (
    <CookiePolicyDocument>
      <SubTitle>Cookie Policy for test.com</SubTitle>

      <Paragraph>This is the Cookie Policy for moonrocks.io, accessible from <a href="https://moonrocks.io">https://moonrocks.io</a></Paragraph>

      <MinorTitle>What Are Cookies</MinorTitle>

      <Paragraph>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</Paragraph>

      <Paragraph>For more general information on cookies see the Wikipedia article on HTTP Cookies.</Paragraph>

      <MinorTitle>How We Use Cookies</MinorTitle>

      <Paragraph>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</Paragraph>

      <MinorTitle>Disabling Cookies</MinorTitle>

      <Paragraph>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</Paragraph>


      <MinorTitle>The Cookies We Set</MinorTitle>

      <CookieList>

      <CookieListItem>
          <Paragraph>Account related cookies</Paragraph>
          <Paragraph>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</Paragraph>
      </CookieListItem>

      <CookieListItem>
          <Paragraph>Login related cookies</Paragraph>
          <Paragraph>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</Paragraph>
      </CookieListItem>

      </CookieList>

      <MinorTitle>Third Party Cookies</MinorTitle>

      <Paragraph>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</Paragraph>

      <CookieList>

      <CookieListItem>
          <Paragraph>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</Paragraph>
      </CookieListItem>

      </CookieList>

      <MinorTitle>More Information</MinorTitle>

      <Paragraph>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. This Cookies Policy was created with the help of the <a href="https://cookiepolicygenerator.com">GDPR Cookies Policy Generator</a></Paragraph>

      <Paragraph>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</Paragraph>

      <CookieList>
      <CookieListItem>Email: cookies@moonrocks.io</CookieListItem>

      </CookieList>
    </CookiePolicyDocument>
  )
};

export default CookiePolicy;