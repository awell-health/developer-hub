import axios from 'axios'
import { useEffect, useState } from 'react'

import { type Stories } from '@/types/stories.types'

interface UseStoriesHook {
  loading: boolean
  stories: Stories
}

export const useStories = (): UseStoriesHook => {
  const [loading, isLoading] = useState(false)
  const [stories, setStories] = useState<Stories>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Stories>(
          'https://orchestration-stories.vercel.app/api/stories'
        )
        setStories(data)
        isLoading(false)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return {
    loading,
    stories,
  }
}
