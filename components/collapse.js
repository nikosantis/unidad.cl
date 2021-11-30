import { useState } from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'

const duration = 350

const collapseStyles = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
}

function getTransitionClass(status) {
  return collapseStyles[status] || 'collapse'
}

export default function Collapse({ isOpen, navbar, children }) {
  const [height, setHeight] = useState(null)

  function onEntering(node) {
    setHeight(node.scrollHeight)
  }

  function onEntered(node) {
    setHeight(node.scrollHeight)
  }

  function onExit(node) {
    setHeight(node.scrollHeight)
  }

  function onExiting() {
    setHeight(0)
  }

  function onExited() {
    setHeight(null)
  }

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      onEntering={onEntering}
      onExiting={onExiting}
      onEntered={onEntered}
      onExited={onExited}
      onExit={onExit}
    >
      {status => {
        const collapseClass = getTransitionClass(status)
        const classes = cx(collapseClass, navbar && 'navbar-collapse')
        return (
          <div style={{ height }} className={classes}>
            {children}
          </div>
        )
      }}
    </Transition>
  )
}
