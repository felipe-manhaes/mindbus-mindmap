// src/components/pages/home-page.tsx
'use client'

import { useCounterStore } from '@/providers/counter-store-provider'

export const ZustandTest = () => {
  const { count, incrementCount, decrementCount,thirdCount } = useCounterStore(
    (state) => state,
  )

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={incrementCount}>
        ||Clean
      </button>
      <button type="button" onClick={decrementCount}>
        ||Add AA
      </button>
      <button type="button" onClick={thirdCount}>
        ||Add BB||
      </button>
    </div>
  )
}
