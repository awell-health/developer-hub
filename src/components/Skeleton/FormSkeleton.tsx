import ContentLoader from 'react-content-loader'

export const FormSkeleton = () => {
  const QUESTION_COUNT = 5
  const SINGLE_QUESTION_SKELETON_HEIGHT = 55
  const SUBMIT_BUTTON_HEIGHT = 35
  const SUBMIT_BUTTON_OFFSET = 10
  const TOTAL_HEIGHT =
    SINGLE_QUESTION_SKELETON_HEIGHT * QUESTION_COUNT +
    SUBMIT_BUTTON_HEIGHT +
    SUBMIT_BUTTON_OFFSET * 2

  const skeletons = []

  for (let i = 0; i < QUESTION_COUNT; i++) {
    skeletons.push(
      <>
        <rect
          x="0"
          y={15 + i * SINGLE_QUESTION_SKELETON_HEIGHT}
          rx="5"
          ry="5"
          width="140"
          height="10"
        />
        <rect
          x="0"
          y={30 + i * SINGLE_QUESTION_SKELETON_HEIGHT}
          rx="5"
          ry="5"
          width="400"
          height="25"
        />
      </>
    )
  }

  return (
    <div className="w-8/12 mx-auto text-center">
      <ContentLoader viewBox={`0 0 400 ${TOTAL_HEIGHT}`}>
        {skeletons}
        <rect
          x="0"
          y={TOTAL_HEIGHT - SUBMIT_BUTTON_HEIGHT}
          rx="5"
          ry="5"
          width="400"
          height={SUBMIT_BUTTON_HEIGHT}
        />
      </ContentLoader>
    </div>
  )
}
