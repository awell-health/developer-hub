interface EffortProps {
  effort: number
}
export const Effort = ({ effort }: EffortProps) => {
  const maxEffort = 5

  return (
    <div className="flex">
      {[...Array(maxEffort)].map((value, index) => {
        index += 1
        if (index <= effort) {
          return (
            <div
              key={index}
              className="w-2 h-2 mr-1 rounded-full bg-blue-600 dark:bg-sky-500"
            ></div>
          )
        }
        return (
          <div
            key={index}
            className="w-2 h-2 mr-1 rounded-full bg-slate-300"
          ></div>
        )
      })}
    </div>
  )
}
