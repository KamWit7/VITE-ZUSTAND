import React, { useEffect, useMemo } from 'react'
import { useBearStore } from '../context/useBearStore'
import bearUrl from '../assets/bear.png'
import { css } from '@emotion/css'

const BearsImg = () => {
  const [setDeadBear, deadBear] = useBearStore((state) => [
    state.setDeadBear,
    state.beadBear,
  ])

  const bears = useBearStore.getState().bears
  const unsub = useBearStore.subscribe(console.log)

  const imgs = useMemo(() => {
    const bearsImg = []

    for (let i = 0; i < bears; i++) {
      bearsImg.push(
        <img
          key={i}
          src={bearUrl}
          className={css`
            width: 20vw;
            height: 10vh;
            object-fit: contain;
            opacity: ${deadBear === i ? 0 : 1};
            transition: all;
            transition-duration: 400ms;
            cursor: pointer;
          `}
          onClick={() => setDeadBear(i)}
        />
      )
    }

    return bearsImg
  }, [bears, deadBear])

  useEffect(() => unsub)

  return <div>{imgs}</div>
}

export default BearsImg
