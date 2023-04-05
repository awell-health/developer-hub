import { activity, pathway, patient } from '@/config/es-indices'

export const ActivityIndexSpecs = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <table className="ignore-default-style min-w-full divide-y divide-slate-300 dark:divide-slate-500">
            <thead>
              <tr className="text-slate-900 dark:text-white text-base font-semibold">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left sm:pl-6 md:pl-0"
                >
                  Property
                </th>
                <th scope="col" className="py-3.5 px-3 text-left">
                  Type
                </th>
                <th scope="col" className="py-3.5 px-3 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {activity.map(({ property, type, description }) => (
                <tr
                  key={property}
                  className="text-slate-900 dark:text-slate-100"
                >
                  <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                    {property}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {type}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {description}
                  </td>
                </tr>
              ))}
              {pathway.map(({ property, type, description }) => (
                <tr
                  key={property}
                  className="text-slate-900 dark:text-slate-100"
                >
                  <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                    pathway.{property}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {type}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {description}
                  </td>
                </tr>
              ))}
              {patient.map(({ property, type, description }) => (
                <tr
                  key={property}
                  className="text-slate-900 dark:text-slate-100"
                >
                  <td className="whitespace-nowrap font-semibold py-4 pl-4 pr-3 sm:pl-6 md:pl-0">
                    pathway.{property}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {type}
                  </td>
                  <td className="whitespace-nowrap py-4 px-3 text-base">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
