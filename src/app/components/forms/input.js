import React, { PropTypes } from 'react'

const Input = (props) => {
  const type = props.type || "text"
  const title = props.title || `Please enter ${props.name} here`
  const ph = props.placeholder || ""
  const handleChange = (e) => props.onChange(e.target.value)
  const required = props.required || false
  const formGroupStyle = "form-group " + props.className ? props.className : null
  return (
    <div className={formGroupStyle}>
        {props.label ? (
          <label className="control-label" htmlFor={props.name}>{props.label}</label>
        ) : null}
        <input
          type={type}
          placeholder={ph}
          title={title}
          required={required}
          value=""
          name={props.name}
          id={props.name}
          className="form-control"
          onChange={handleChange}
        />
        {props.renderAfter ? (<span className="help-block small">{props.renderAfter()}</span>) : null}
        {props.error ? (<span className="input-error">{props.error}</span>) : null}
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Input
