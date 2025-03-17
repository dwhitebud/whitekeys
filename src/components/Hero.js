import React from "react"
import PropTypes from "prop-types"

const Hero = ({ title, subtitle, cta, ctaLink, imageSrc, imageAlt }) => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="container">
        <div className="hero__content">
          <h1>{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          {cta && ctaLink && (
            <a href={ctaLink} className="btn">
              {cta}
            </a>
          )}
        </div>
      </div>
      {imageSrc && (
        <div className="hero__image" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label={imageAlt || ""}></div>
      )}
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

Hero.defaultProps = {
  subtitle: "",
  cta: "",
  ctaLink: "",
  imageSrc: "",
  imageAlt: "",
}

export default Hero
