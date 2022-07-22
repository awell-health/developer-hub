import axios from 'axios'
import { useEffect, useState } from 'react'

import { type Story } from '@/types/stories.types'

interface useStoryHook {
  loading: boolean
  story: Story | null
}

export const useStory = (): useStoryHook => {
  const [loading, isLoading] = useState(false)
  const [story, setStory] = useState<Story | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Story>(
          'https://orchestration-stories.vercel.app/api/stories'
        )
        setStory(data)
        isLoading(false)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return {
    loading,
    story,
  }
}
