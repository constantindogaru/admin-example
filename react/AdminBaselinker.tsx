import React, { FC, useState } from 'react'
import { Layout } from 'vtex.styleguide'
import { StepCounterControl } from './typings/typings'

import './styles.global.css'
import ApiKeyConfig from './ApiKeyConfig'
import StorageListing from './StorageListing'
import SaveStorage from './SaveStorage'

const TOTAL_STEPS = 3

const AdminBaselinker: FC = () => {
  const [step, setStep] = useState(1)

  const next = () => setStep(step + 1)
  const back = () => setStep(step - 1)

  const stepCounterControl: StepCounterControl = {
    back,
    current: step,
    next,
    total: TOTAL_STEPS,
  }

  return (
    <Layout>
      {step === 1 && (
        <ApiKeyConfig
          stepCounterControl={stepCounterControl}
        />
      )}
      {step === 2 && (
        <StorageListing
          stepCounterControl={stepCounterControl}
        />
      )}
      {step === 3 && (
        <SaveStorage
          stepCounterControl={stepCounterControl}
        />
      )}
    </Layout>
  )
}

export default AdminBaselinker
