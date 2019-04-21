import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'
import AddTaskForm from './AddTaskForm'


// -----------END--OF--IMPORTS------------------
class Order extends React.Component {
  static propTypes = {
    removeTask:       PropTypes.func,
    toggleTodoStatus: PropTypes.func,
    tasks:            PropTypes.array,
    // order:           PropTypes.array,
  }

  removeFromOrder = (key) => () => {
    this.props.removeFromOrder(key)
  }

  renderOrder = (key) => {
    const fish = this.props.tasks[key]
    const count = this.props.tasks.length
    // const fishIsAvailable = fish && fish.status === 'available'
    const orderTransitionOptions = {
      classNames: 'order',
      key,
      timeout:    { enter: 500, exit: 500 },
    }

    // Make sure the fish is loaded before continuing
    // if (!fish) return null

    // if (!fishIsAvailable) {
    //   return (
    //     <li key={key}>
    //       {`Sorry, ${fish ? fish.name : 'fish'} is not available`}
    //     </li>
    //   )
    // }
    return (
      <CSSTransition {...orderTransitionOptions}>
        <li key={key}>
          <div className={'todo-item'}>
            <div>
              <input type={'checkbox'} checked={fish.status} onChange={() => this.props.toggleTodoStatus(key)} />
              {fish.name}
            </div>
            <div>
              <button type={'button'} onClick={() => this.props.removeTask(key)}>
                <span role={'img'} aria-label={'heavy-multiplication-sign'}>✖️</span>
              </button>
            </div>
          </div>
        </li>
      </CSSTransition>
    )
  }

  render() {
    const tasks = Object.keys(this.props.tasks)
    const countTransitionsOptions = {
      key:        tasks.length,
      classNames: 'count',
      timeout:    { enter: 500, exit: 500 },
    }

    return (
      <div className={'order-wrap'}>
        <span>
          {'Active Notes: '}
        </span>
        <TransitionGroup component={'span'} className={'count'}>
          <CSSTransition {...countTransitionsOptions}>
            <span>
              {tasks.length}
            </span>
          </CSSTransition>
        </TransitionGroup>
        <AddTaskForm addTask={this.props.addTask} />
        <TransitionGroup component={'ul'} className={'order'}>
          {tasks.map((key) => this.renderOrder(key))}
        </TransitionGroup>
      </div>

    )
  }
}

export default Order
