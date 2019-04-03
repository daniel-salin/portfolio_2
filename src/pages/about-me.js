import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Typed from 'react-typed';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const Block = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 50px 100px 50px 100px;

  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

class AboutMe extends React.Component {
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
      <AboutMeWrapper>
        <Layout theme="white" openContactPopup={this.openContactPopup}>
          <AboveFold>
            <t.H1 green align="center">
              <Typed strings={['Daniel Salin']} typeSpeed={40} />
            </t.H1>
            <Block>
              <t.P align="center" max100>
                Web development is as much of a passion as it is a possible career. We build things, broken things,
                beautiful things. Sometimes for others, often for ourselves. The feeling of building something and
                putting it out for the world to see is a feeling second to none. I believe in the agile work flow and
                live by version control. The git repo has most of the projects listed as private repo's but if you'd
                like to take a gander at anything just contact me and I'll make it public.
              </t.P>
            </Block>
            <Block>
              <t.P align="center" max100>
                Web development is as much of a passion as it is a possible career. We build things, broken things,
                beautiful things. Sometimes for others, often for ourselves. The feeling of building something and
                putting it out for the world to see is a feeling second to none. I believe in the agile work flow and
                live by version control. The git repo has most of the projects listed as private repo's but if you'd
                like to take a gander at anything just contact me and I'll make it public.
              </t.P>
            </Block>
          </AboveFold>
          <Content>
            <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Name Surname" className="avatar" />
          </Content>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </AboutMeWrapper>
    );
  }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.png" }) {
      ...fluidImage
    }
  }
`;
