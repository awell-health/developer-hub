import { FC } from 'react'

import { useRandomExtensions } from '@/hooks/useRandomExtensions'

import { ExtensionCard } from '../../atoms'

interface RandomExtensionsPanelProps {
  n?: number
  cols?: 3 | 4
  excludeExtensionWithKey?: string
  cardType?: 'normal' | 'condensed'
}

export const RandomExtensionsPanel: FC<RandomExtensionsPanelProps> = ({
  n = 3,
  cols = 3,
  excludeExtensionWithKey,
  cardType = 'normal',
}) => {
  /**
   * This is loaded on the client side so this will not be indexed by Google.
   * That's fine as we show random extensions every time the page is reloaded.
   */
  const { randomExtensions } = useRandomExtensions(n, excludeExtensionWithKey)

  return (
    <div
      className={`grid gap-4 ${
        cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
      }`}
    >
      {randomExtensions.map((extension) => (
        <ExtensionCard
          extension={extension}
          key={extension.key}
          type={cardType}
        />
      ))}
    </div>
  )
}
