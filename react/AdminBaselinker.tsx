import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, Button, Input } from 'vtex.styleguide'

import './styles.global.css'

const AdminBaselinker: FC = () => {
  const [token, setToken] = useState('')
  return (
    <Layout>
      <PageBlock
        title={<FormattedMessage id="admin-baselinker.configure.title"/>}
        subtitle={<FormattedMessage id="admin-baselinker.configure.subtitle"/>}
        variation="full"
      >
        <Input
          placeholder="API key"
          value={token}
          onChange={(e: any) => setToken(e.target.value)}
        />
        <Button
          onClick={() => {
          }}
        >
          <FormattedMessage id="admin-baselinker.button.next"/>
        </Button>
      </PageBlock>
    </Layout>
  )
}

export default AdminBaselinker
