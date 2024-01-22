import { CheckIcon, MinusIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { FC, Fragment } from 'react'

import {
  sections,
  sessionsAndLink,
} from '../../../content/awell-orchestration/triggerCareFlows'
import { Effort } from './atoms'

interface TriggerCareFlowsComparisonProps {
  highlight?: string
}

export const TriggerCareFlowsComparison: FC<
  TriggerCareFlowsComparisonProps
> = ({ highlight }) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* xs to lg */}
        <div className="mx-auto space-y-16 xl:hidden">
          {sessionsAndLink.map((tier) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-400">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">
                  {tier.description}
                </p>
                <div>
                  <div className="font-semibold pb-2 text-slate-900 dark:text-slate-400">
                    Use when:
                  </div>
                  <div>
                    <p
                      className="mt-4 text-sm text-slate-500 dark:text-slate-300"
                      dangerouslySetInnerHTML={{
                        __html: String(tier.useWhen),
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold pb-2 text-slate-900 dark:text-slate-400">
                    Effort:
                  </div>
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
                  <caption className="bg-slate-50 border-t border-slate-200 dark:border-slate-600 py-3 px-4 text-sm font-medium text-slate-900 text-left dark:bg-slate-800 dark:text-slate-300">
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
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-t border-slate-200 dark:border-slate-600"
                      >
                        <th
                          className="py-5 px-4 text-sm font-normal text-slate-500 dark:text-slate-400 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.categories[tier.name] === 'string' ? (
                            <span
                              className="block text-sm text-slate-700 text-right dark:text-slate-400"
                              dangerouslySetInnerHTML={{
                                __html: String(feature.categories[tier.name]),
                              }}
                            ></span>
                          ) : (
                            <>
                              {feature.categories[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-slate-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.categories[tier.name] === true
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
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden xl:block">
          <table className="w-full h-px table-fixed ignore-default-style">
            <thead>
              <tr>
                <th
                  className="w-1/3 pb-4 px-6 text-sm font-medium text-slate-900 dark:text-slate-400 text-left"
                  scope="col"
                ></th>
                {sessionsAndLink.map((tier) => (
                  <th
                    key={tier.name}
                    className={clsx(
                      'w-1/3 pb-4 px-6 text-sm leading-6 text-slate-900 dark:text-slate-400',
                      highlight === tier.name
                        ? 'bg-blue-50 dark:bg-slate-800 font-bold'
                        : 'font-medium'
                    )}
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-slate-200 divide-y dark:border-slate-600 divide-slate-200 dark:divide-slate-600">
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-slate-900 dark:text-slate-400 text-left align-top"
                  scope="row"
                >
                  Volume
                </th>
                {sessionsAndLink.map((tier) => (
                  <td
                    key={tier.name}
                    className={clsx(
                      'h-full py-4 px-6 text-center text-sm text-slate-500',
                      highlight === tier.name
                        ? 'bg-blue-50 dark:bg-slate-800'
                        : ''
                    )}
                  >
                    {tier.description}
                  </td>
                ))}
              </tr>
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-slate-900 dark:text-slate-400 text-left align-top"
                  scope="row"
                >
                  Use when
                </th>
                {sessionsAndLink.map((tier) => (
                  <td
                    key={tier.name}
                    className={clsx(
                      'h-full py-4 px-6 text-center text-sm text-slate-500',
                      highlight === tier.name
                        ? 'bg-blue-50 dark:bg-slate-800'
                        : ''
                    )}
                    dangerouslySetInnerHTML={{
                      __html: String(tier.useWhen),
                    }}
                  />
                ))}
              </tr>
              <tr>
                <th
                  className={clsx(
                    'py-8 px-6 text-sm font-medium text-slate-900 dark:text-slate-400 text-left align-top'
                  )}
                  scope="row"
                >
                  Effort
                </th>
                {sessionsAndLink.map((tier) => (
                  <td
                    key={tier.name}
                    className={clsx(
                      'h-full py-4 px-6 align-top',
                      highlight === tier.name
                        ? 'bg-blue-50 dark:bg-slate-800'
                        : ''
                    )}
                  >
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
                      className="bg-slate-50 py-3 pl-6 text-sm font-semibold text-slate-900 text-left dark:bg-slate-800 dark:text-slate-300"
                      colSpan={sessionsAndLink.length + 1}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-sm font-normal text-slate-900 dark:text-slate-400 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {feature.join === true ? (
                        <td
                          colSpan={2}
                          className={clsx(
                            'py-5 px-6 text-center',
                            highlight === section.name
                              ? 'bg-blue-50 dark:bg-slate-800'
                              : ''
                          )}
                        >
                          {typeof feature.categories['join'] === 'string' ? (
                            <span
                              className="block text-sm text-slate-700 dark:text-slate-400"
                              dangerouslySetInnerHTML={{
                                __html: String(feature.categories['join']),
                              }}
                            />
                          ) : (
                            <>
                              {feature.categories['join'] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500 mx-auto"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="h-5 w-5 text-slate-400 mx-auto"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.categories['join'] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {'join'}
                              </span>
                            </>
                          )}
                        </td>
                      ) : (
                        sessionsAndLink.map((tier) => (
                          <td
                            key={tier.name}
                            className={clsx(
                              'py-5 px-6 text-center',
                              highlight === tier.name
                                ? 'bg-blue-50 dark:bg-slate-800'
                                : ''
                            )}
                          >
                            {typeof feature.categories[tier.name] ===
                            'string' ? (
                              <span
                                className="block text-sm text-slate-700 dark:text-slate-400"
                                dangerouslySetInnerHTML={{
                                  __html: String(feature.categories[tier.name]),
                                }}
                              />
                            ) : (
                              <>
                                {feature.categories[tier.name] === true ? (
                                  <CheckIcon
                                    className="h-5 w-5 text-green-500 mx-auto"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="h-5 w-5 text-slate-400 mx-auto"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.categories[tier.name] === true
                                    ? 'Included'
                                    : 'Not included'}{' '}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))
                      )}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
