import axios from 'axios'
import { useEffect, useState } from 'react'

import { type Stories } from '@/types/stories.types'

interface UseStoriesHook {
  loading: boolean
  stories: Stories
}

const ENDPOINT = process.env.NEXT_PUBLIC_AWELL_STORIES_API_URL + '/api/stories'

export const useStories = (): UseStoriesHook => {
  const [loading, isLoading] = useState(false)
  const [stories, setStories] = useState<Stories>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Stories>(ENDPOINT)
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
