import React from 'react'
import { useBearStore } from '../context/useBearStore'
import { css } from '@emotion/css'

const Bears = () => {
  const bears = useBearStore((store) => store.bears)

  return (
    <div>
      Current Bears Number{' '}
      <span
        className={css(
          `display: block; color: gold; font-size: 24px; font-weight: bold`
        )}>
        {bears}
      </span>
    </div>
  )
}

export default Bears
