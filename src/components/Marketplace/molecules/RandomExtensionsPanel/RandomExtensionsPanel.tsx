import { FC } from 'react'

import { Spinner } from '@/components/Spinner'
import { useExtensions } from '@/hooks/useExtensions'

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
  const { getRandomExtensions, loading: loadingAllExtensions } = useExtensions()

  if (loadingAllExtensions) {
    return <Spinner />
  }

  return (
    <div
      className={`grid gap-4 ${
        cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
      }`}
    >
      {getRandomExtensions(n, excludeExtensionWithKey).map((extension) => (
        <ExtensionCard
          extension={extension}
          key={extension.key}
          type={cardType}
        />
      ))}
    </div>
  )
}
