import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { PageBlock, Button, Input } from 'vtex.styleguide'
import { StepCounterControl } from './typings/typings'

import './styles.global.css'
import StepCounter from './components/StepCounter'

interface Props {
  stepCounterControl: StepCounterControl
}

const StorageListing: FC<Props> = ({
  stepCounterControl
}) => {
  const [token, setToken] = useState('')
  return (
    <PageBlock
      title="Storage Selection"
      subtitle="Please select your storage"
      variation="full"
    >
      <Input
        placeholder="API Key"
        value={token}
        onChange={(e: any) => setToken(e.target.value)}
      />
      <StepCounter {...stepCounterControl} />
    </PageBlock>
  )
}

export default StorageListing
