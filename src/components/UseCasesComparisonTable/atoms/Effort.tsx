interface EffortProps {
  effort: 1 | 2 | 3 | 4 | 5
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
              className="w-2.5 h-2.5 mr-1.5 rounded-full bg-sky-400"
            ></div>
          )
        }
        return (
          <div
            key={index}
            className="w-2.5 h-2.5 mr-1.5 rounded-full bg-slate-300"
          ></div>
        )
      })}
    </div>
  )
}
