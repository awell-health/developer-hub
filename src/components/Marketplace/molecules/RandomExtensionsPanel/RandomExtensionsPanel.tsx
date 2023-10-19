import { FC, useEffect, useState } from 'react'

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
  const [randomExtensions, setRandomExtensions] = useState<Extension[]>([])
  const { getRandomExtensions, getMarketplaceExtensions } = useExtensions()

  useEffect(() => {
    /**
     * In an ideal world, we can ask the server for n random extensions
     * instead of doing this on the client side. Now we have to fetch all extensions from the server
     * and just grab n random items
     */
    setRandomExtensions(
      getRandomExtensions(
        getMarketplaceExtensions(extensions),
        n,
        excludeExtensionWithKey
      )
    )
  }, [])

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
