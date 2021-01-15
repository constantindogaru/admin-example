import React, { FC } from 'react'

import { Button } from 'vtex.styleguide'
import { StepCounterControl } from './../typings/typings'

const StepCounter: FC<StepCounterControl> = ({
  current,
  total,
  next,
  back,
}) => {
  return (
    <div className="flex items-center">
      <div className="c-muted-1 f6">
        Step {current} of {total}
      </div>
      <div className="flex-grow-1 tr">
        {current === 1 ? null : (
          <span className="mh2">
            <Button onClick={back}>
              BACK
            </Button>
          </span>
        )}
        {current === total ? null : (
          <span className="mh2">
            <Button onClick={next}>
              NEXT
            </Button>
          </span>
        )}
      </div>
    </div>
  )
}

export default StepCounter
