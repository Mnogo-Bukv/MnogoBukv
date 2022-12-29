import React, { useMemo } from 'react'

export const Gap: typeof import('./Gap').Gap = React.memo(function Gap({ size }) {
  const style = useMemo(() => ({ width: size, height: size }), [size])

  return <div style={style} />
})
