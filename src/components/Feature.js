import React from "react"
import PropTypes from "prop-types"

const Feature = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      {icon && <div className="feature-card__icon" dangerouslySetInnerHTML={{ __html: icon }}></div>}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Feature.defaultProps = {
  icon: "",
}

export default Feature
