import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import logo from "../assets/TUC-logotyp-YH-1200px.png"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Hi, I'm Christoffer</h1>
            <div className="underline"></div>
            <h4>
              Studerande på systemutveklare.NET på{" "}
              <a href="https://www.tucsweden.se/yrkeshogskola/vara-utbildningar/systemutvecklare-net-2/">
                <img src={logo} alt="logo" width="80px"></img>
              </a>
            </h4>
            <br />
            - 🔭 Jag studerar just nu publiceringsverktyg
            <br />
            <br />
            - 🌱 Just nu lär jag mig React, Gatsby, GraphQL and Strapi
            <br />
            <br />
            - 🤔 Jag letar ständigt efter nya utmaningar! 
            <br />
            <br />
            - 💬 Fråga mig vad jag ska göra imorgon
            <br />
            <br />
            - ⚡ Rolig Fakta: Jag har tävlat i bågskytte
            <br />
            <br />
            - 📫 Har du frågor? Använd länken nedanför
            <br />
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
