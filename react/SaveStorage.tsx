import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { PageBlock } from 'vtex.styleguide'
import { StepCounterControl } from './typings/typings'

import './styles.global.css'
import StepCounter from './components/StepCounter'

interface Props {
  stepCounterControl: StepCounterControl
}

const SaveStorage: FC<Props> = ({
  stepCounterControl
}) => {
  return (
    <PageBlock
      title={<FormattedMessage id="admin-baselinker.configure.title"/>}
      subtitle={<FormattedMessage id="admin-baselinker.configure.subtitle"/>}
      variation="full"
    >
      <h3>This is where we should save the storage that was chosen in the previous step in Master Data and display to the user that everything was successful.</h3>
      <StepCounter {...stepCounterControl} />
    </PageBlock>
  )
}

export default SaveStorage
