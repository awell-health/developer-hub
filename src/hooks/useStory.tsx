import axios from 'axios'
import { useEffect, useState } from 'react'

import { type Story } from '@/types/stories.types'

interface useStoryHook {
  loading: boolean
  story: Story | null
}

export const useStory = (storyId: string): useStoryHook => {
  const [loading, isLoading] = useState(false)
  const [story, setStory] = useState<Story | null>(null)

  const ENDPOINT =
    process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL + '/api/stories/' + storyId

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Story>(ENDPOINT)
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
