'use client'

import { StyleProvider } from '@ant-design/cssinjs'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export function AntdProviders({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </AntdRegistry>
  )
}