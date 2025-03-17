import React from "react"
import PropTypes from "prop-types"

const Testimonial = ({ quote, author, role }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote">
        {quote}
      </div>
      <div className="testimonial-card__author">
        {author} {role && <span className="testimonial-card__role">- {role}</span>}
      </div>
    </div>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
}

Testimonial.defaultProps = {
  role: "",
}

export default Testimonial
