import { FC } from 'react'

import { useExtensions } from '@/hooks/useExtensions'
import { Extension } from '@/types/extenion.types'

import { ExtensionCard } from '../../atoms'

interface RandomExtensionsPanelProps {
  extensions: Extension[]
  n?: number
  cols?: 3 | 4
  excludeExtensionWithKey?: string
  cardType?: 'normal' | 'condensed'
}

export const RandomExtensionsPanel: FC<RandomExtensionsPanelProps> = ({
  extensions,
  n = 3,
  cols = 3,
  excludeExtensionWithKey,
  cardType = 'normal',
}) => {
  const { getRandomExtensions, getMarketplaceExtensions } = useExtensions()

  return (
    <div
      className={`grid gap-4 ${
        cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
      }`}
    >
      {getRandomExtensions(
        getMarketplaceExtensions(extensions),
        n,
        excludeExtensionWithKey
      ).map((extension) => (
        <ExtensionCard
          extension={extension}
          key={extension.key}
          type={cardType}
        />
      ))}
    </div>
  )
}
