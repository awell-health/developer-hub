// import { type TierType, type SectionType } from '../../types/useCases.types'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

import {
  sections,
  tiers,
} from '../../../content/awell-orchestration/integrationUseCases'
import { Effort } from './atoms'

export const UseCasesComparisonTable = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-white">
        {/* xs to lg */}
        <div className="mx-auto space-y-16 xl:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <div>
                  <div className="font-semibold pb-2">Effort:</div>
                  <div>
                    <Effort effort={tier.effort} />
                  </div>
                </div>
              </div>

              {sections.map((section) => (
                <table
                  key={section.name}
                  className="w-full ignore-default-style"
                >
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-t border-gray-200"
                      >
                        <th
                          className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700 text-right">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? 'Yes'
                                  : 'No'}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={clsx(
                  tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <a
                  href={tier.href}
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  More infomation
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden xl:block">
          <table className="w-full h-px table-fixed ignore-default-style">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Use cases</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                  scope="row"
                >
                  Description
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-4 px-6 align-top">
                    <div className="relative h-full table">
                      <p className="text-sm text-gray-500">
                        {tier.description}
                      </p>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                  scope="row"
                >
                  Effort
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-4 px-6 align-top">
                    <div className="relative h-full flex items-center justify-center">
                      <Effort effort={tier.effort} />
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6 text-center">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500 mx-auto"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400 mx-auto"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="custom-link block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                    >
                      More information
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
