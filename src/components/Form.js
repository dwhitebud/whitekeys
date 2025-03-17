import React from "react"
import PropTypes from "prop-types"

const Form = ({ fields, submitButtonText, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div 
          key={field.id} 
          className={`form-group ${field.fullWidth ? 'form-group--full' : ''}`}
        >
          <label htmlFor={field.id} className="form-label">
            {field.label} {field.required && <span className="required">*</span>}
          </label>
          
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.id}
              className="form-control"
              rows={5}
              required={field.required}
              placeholder={field.placeholder || ""}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              className="form-control"
              required={field.required}
              placeholder={field.placeholder || ""}
            />
          )}
        </div>
      ))}
      
      <div className="form-group form-group--full">
        <button type="submit" className="btn">
          {submitButtonText}
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.bool,
      placeholder: PropTypes.string,
      fullWidth: PropTypes.bool,
    })
  ).isRequired,
  submitButtonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  submitButtonText: "Submit",
}

export default Form
