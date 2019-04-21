/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

class AddTaskForm extends React.Component {
  nameRef = React.createRef() // eslint-disable-next-line lines-between-class-members
  priceRef = React.createRef() // eslint-disable-next-line lines-between-class-members
  statusRef = React.createRef() // eslint-disable-next-line lines-between-class-members
  descRef = React.createRef() // eslint-disable-next-line lines-between-class-members
  imageRef = React.createRef() // eslint-disable-next-line lines-between-class-members

  createTask = (event) => {
    event.preventDefault()
    const task = {
      name: get(this.nameRef, 'current.value'),
    }
    // Calling addFish from APP.js two levels deep
    if (task.name) this.props.addTask(task)
    // Reset the form after fish is added
    event.currentTarget.reset()
  }


  render() {
    return (
      <form className={'fish-edit'} onSubmit={this.createTask} autoComplete={'off'}>
        <input name={'name'} ref={this.nameRef} type={'text'} placeholder={'create a new task...'} />
        <button disabled={!this.createTask} type={'submit'}>
          <span role={'img'} aria-label={'arrow-forward'}>
            ➕
          </span>
        </button>
      </form>
    )
  }
}

export default AddTaskForm
