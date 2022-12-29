import React, { useMemo } from 'react'
import { View } from 'react-native'

export const Gap: typeof import('./Gap').Gap = React.memo(function Gap({ size }) {
  const style = useMemo(() => ({ width: size, height: size }), [size])

  return <View style={style} />
})
