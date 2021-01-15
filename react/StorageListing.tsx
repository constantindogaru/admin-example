import React, { FC } from 'react'
import { PageBlock } from 'vtex.styleguide'
import { StepCounterControl } from './typings/typings'

import './styles.global.css'
import StepCounter from './components/StepCounter'

interface Props {
  stepCounterControl: StepCounterControl
}

const StorageListing: FC<Props> = ({
  stepCounterControl
}) => {
  return (
    <PageBlock
      title="Storage Selection"
      subtitle="Please select your storage"
      variation="full"
    >
      <h3>This is where we should use the API Key from the previous step to call https://api.baselinker.com/index.php?method=getStoragesList and get the storage list. The storage list will be displayed as a checkbox in this page. Each option in the checkbox will be a storage from that list.</h3>
      <StepCounter {...stepCounterControl} />
    </PageBlock>
  )
}

export default StorageListing
