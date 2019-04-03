import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
//IMG
import Kkaraoke from '../images/kkaraoke.png';
import Hiragana from '../images/hiragana.png';
import Hangman from '../images/hangman.png';
import Mashup from '../images/apimashup.png';
import Todo from '../images/todo.png';
import Trello from '../images/trello.png';
import Recipe from '../images/recipe.png';
import Weather from '../images/weather.png';
import Resume from '../images/Resume_DS.pdf';

import Typed from 'react-typed';

import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              <Typed strings={['Web Developer', 'Daniel Salin']} typeSpeed={40} backSpeed={50} />
            </t.H1>
            <t.LargeP align="center" max45>
              Studying Web development (fullstack) at Chas Academy, currently applying for LIA / internships. Freelance
              web developer
            </t.LargeP>
            <HireMe as="a" target="_blank" large href={Resume} book>
              Resume
            </HireMe>
            <HireMe as="a" target="_blank" large href="https://www.linkedin.com/in/daniel-salin-57084535/" book>
              LinkedIn
            </HireMe>
            <HireMe as="a" target="_blank" large href="https://github.com/daniel-salin" book>
              Github
            </HireMe>
          </AboveFold>
          <Block>
            <t.H4 align="center">
              In the pipeline: IMDB clone, feedback system for lectures, applying for internships/job
            </t.H4>
          </Block>
          <Block>
            <t.H4 align="center">Portfolio in chronological order</t.H4>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Kkaraoke} alt="kkaraoke" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>KKaraoke - Complete site redesign</t.H2>
                <t.P>Type: Freelance</t.P>
                <t.P>
                  This was my first real venture into freelance. It started out as a simple pitch to one of the owners
                  that caught his interest. Worked against his specifications and demands over the course of a few
                  months before we finally went live. Taught me alot about working against client demands and being
                  flexible.
                </t.P>
                <t.P>HTML5, CSS3, PHP, MYSQLi</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="http://kkaraoke.se/">
                  Visit the site
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Japanese hiragana aid</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>
                  Our first hand-in assignment from Chas Academy. A simple static site with a guide to the hiragana
                  writing system
                </t.P>
                <t.P>HTML5, CSS3</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://danielsalin.chas.academy/u01-static-website/index.html"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Hiragana} alt="Japanese hiragana aid" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Hangman} alt="Hangman" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Hangman Game</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>
                  A fun little hangman game with some light score counting. Our first venture into APIs. Having grown up
                  with pokémon games I decided to make my own tribute.
                </t.P>
                <t.P>HTML5, CSS3, JS</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://danielsalin.chas.academy/u02-hangman/index.html"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>API mashup- Image gallery</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>This assignment relied on mashing up different APIs to make an image gallery. </t.P>
                <t.P>JS, APIs</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://danielsalin.chas.academy/u03-api-mashup/index.html"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Mashup} alt="API mashup" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Todo} alt="Todo" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Todo App</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>Tackling the MVC concept this app utilizes a simple framework and database</t.P>
                <t.P>MVC, JS</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://todo.danielsalin.chas.academy/"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Trello Clone</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>
                  Don't underestimate jQuery, this app was built as means to introduce jQuery and why it still has a
                  place in the current climate.
                </t.P>
                <t.P>jQuery</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://danielsalin.chas.academy/u05-trello-clone/index.html"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Trello} alt="Trello clone" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Recipe} alt="Recipe app" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Recipe App (Back End and Front End)</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>Build a RESTful API and connect it to a Front End app made in Angular.</t.P>
                <t.P>PHP, MVC (Laravel, Angular)</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="http://recipe-app.danielsalin.chas.academy/recipe"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Weather App</t.H2>
                <t.P>Type: Assignment</t.P>
                <t.P>
                  My favorite thus far. Utilizes the built in Geolocation API and the superb DarkSky API wrapped with
                  React and some bootstrap for good measure
                </t.P>
                <t.P>React, Bootstrap, APIs</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://daniel-salin.github.io/weather-app/"
                >
                  Visit the site
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Weather} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Let's build something together!</t.LargeP>
            <HireMe as="a" target="_blank" large href="https://www.linkedin.com/in/daniel-salin-57084535/" book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.png" }) {
      ...fluidImage
    }
  }
`;
