import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { fetchEmployees } from './reducers/employeeActions'
import submit from './submit'


const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)
let InitializeFromStateForm = props => {
  const { personelIdValue, error, handleSubmit,firstName, lastName, load, pristine, reset, submitting } = props

  const empInfo = {
    personelId: NaN,
    firstName: "",
    lastName: "",
    salary: NaN,
    departmentId: NaN,
    jobId: NaN
  }


  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <button type="button" onClick={() => load("1")}>
          Load Account
        </button>
      </div>
      <div>
        <label>PersonelId</label>
        <div>
          <Field
            name="personelId"
            component="input"
            type="text"
            placeholder="Id"
          />
        </div>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Anniversary Date</label>
        <div>
          <Field name="anniversaryDate" component="input" type="date" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="">Select a color...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize : true
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
const selector = formValueSelector('InitializeFromStateForm')
InitializeFromStateForm = connect(
  state => {
   const {a}=state.employeeReducer.employee;
    console.log(state.employeeReducer.employee); 
    return (
    // const personelIdValue = selector(state, 'personelId')
    {
      initialValues: {
        firstName: state.employeeReducer.employee.firstName,
        lastName: state.employeeReducer.employee.lastName
      }//state.employeeReducer.employee
    })},
    { load: (personelId) => fetchEmployees(personelId) }
  /* dispatch => {
     return {
         load: (personelId) => dispatch(fetchEmployees(personelId))
       }
   }*/ // bind account loading action creator
)(InitializeFromStateForm)

export default InitializeFromStateForm