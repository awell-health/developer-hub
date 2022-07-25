import { Story } from './atoms'

interface HowToUseProps {
  storyIds: string[]
}

export const HowToUse = ({ storyIds }: HowToUseProps) => {
  const MIN_COLUMNS = 2
  const MAX_COLUMNS = 3
  const columns =
    storyIds.length === 1
      ? MIN_COLUMNS
      : storyIds.length > MAX_COLUMNS
      ? MIN_COLUMNS
      : storyIds.length

  return (
    <div className={`grid md:grid-cols-${columns} gap-4`}>
      {storyIds.map((storyId) => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </div>
  )
}
