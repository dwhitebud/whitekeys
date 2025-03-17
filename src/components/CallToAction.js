import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const CallToAction = ({ title, description, buttonText, buttonLink, isExternal }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>{title}</h2>
          <p>{description}</p>
          {isExternal ? (
            <a href={buttonLink} className="btn" target="_blank" rel="noopener noreferrer">
              {buttonText}
            </a>
          ) : (
            <Link to={buttonLink} className="btn">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
}

CallToAction.defaultProps = {
  isExternal: false,
}

export default CallToAction
