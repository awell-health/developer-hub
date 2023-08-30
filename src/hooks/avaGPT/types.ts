import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from 'react'

import { type SubmitPromptOptions } from './markprompt_api/submitPrompt'

export type RequiredKeys<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>

export type OpenAIChatCompletionsModelId = 'gpt-4' | 'gpt-3.5-turbo'

export type OpenAICompletionsModelId =
  | 'text-davinci-003'
  | 'text-davinci-002'
  | 'text-curie-001'
  | 'text-babbage-001'
  | 'text-ada-001'
  | 'davinci'
  | 'curie'
  | 'babbage'
  | 'ada'

export type OpenAIEmbeddingsModelId = 'text-embedding-ada-002'

export type OpenAIModelId =
  | OpenAIChatCompletionsModelId
  | OpenAICompletionsModelId
  | OpenAIEmbeddingsModelId

export type SourceType =
  | 'github'
  | 'motif'
  | 'website'
  | 'file-upload'
  | 'api-upload'

export interface Source {
  type: SourceType
  data?: {
    url?: string
    domain?: string
  }
}

export interface SearchResult extends SearchResultSection {
  file: FileReferenceFileData
  matchType: 'title' | 'leadHeading' | 'content'
}

export interface SearchResultSection extends FileSectionReferenceSectionData {
  content?: string
  snippet?: string
}

export interface FileSectionReference extends FileSectionReferenceSectionData {
  file: FileReferenceFileData
}

export interface FileSectionReferenceSectionData {
  meta?: {
    leadHeading?: {
      id?: string
      depth?: number
      value?: string
      slug?: string
    }
  }
}

export interface FileReferenceFileData {
  title?: string
  path: string
  meta?: object
  source: Source
}

export interface SearchResultsResponse {
  debug?: unknown
  data: SearchResult[]
}

export interface PromptFeedback {
  vote: '1' | '-1'
}

interface AsProp<C extends ElementType> {
  as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

// This is a new type utility with ref!
export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

// This is the type for the "ref" only
export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref']

export interface SectionHeading {
  value?: string | undefined
  id?: string | undefined
  slug?: string | undefined
}

export interface SearchResultComponentProps {
  href?: string
  heading?: string
  title?: string
  subtitle?: string
}

interface MarkpromptOptions {
  /**
   * Display format.
   * @default "dialog"
   **/
  display?: 'plain' | 'dialog'
  close?: {
    /**
     * `aria-label` for the close modal button
     * @default "Close Markprompt"
     **/
    label?: string
    /**
     * Show the close button
     * @default true
     **/
    visible?: boolean
  }
  description?: {
    /**
     * Visually hide the description
     * @default true
     **/
    hide?: boolean
    /**
     * Description text
     **/
    text?: string
  }
  feedback?: {
    /**
     * Enable feedback functionality, shows a thumbs up/down button after a
     * prompt was submitted.
     * @default false
     * */
    enabled?: boolean
    /**
     * Heading above the form
     * @default "Was this response helpful?"
     **/
    heading?: string
  }
  prompt?: SubmitPromptOptions & {
    /**
     * Label for the prompt input
     * @default "Ask AI"
     **/
    label?: string
    /**
     * Label for the tab bar
     * @default "Ask AI"
     **/
    tabLabel?: string
    /**
     * Placeholder for the prompt input
     * @default "Ask AI…"
     **/
    placeholder?: string
  }
  references?: {
    /** Callback to transform a reference into an href */
    getHref?: (reference: FileSectionReference) => string | undefined
    /** Callback to transform a reference into a label */
    getLabel?: (reference: FileSectionReference) => string | undefined
    /**
     * Heading above the references
     * @default "Answer generated from the following sources:"
     **/
    heading?: string
    /** Loading text, default: `Fetching relevant pages…` */
    loadingText?: string
    /**
     * Callback to transform a reference id into an href and text
     * @deprecated Use `getHref` and `getLabel` instead
     **/
    transformReferenceId?: (referenceId: string) => {
      href: string
      text: string
    }
  }
  trigger?: {
    /**
     * `aria-label` for the open button
     * @default "Open Markprompt"
     **/
    label?: string
    /**
     * Placeholder text for non-floating element.
     * @default "Ask docs"
     **/
    placeholder?: string
    /**
     * Should the trigger button be displayed as a floating button at the bottom right of the page?
     * Setting this to false will display a trigger button in the element passed
     * to the `markprompt` function.
     */
    floating?: boolean
    /** Do you use a custom element as the dialog trigger? */
    customElement?: boolean
  }
  title?: {
    /**
     * Visually hide the title
     * @default true
     **/
    hide?: boolean
    /**
     * Text for the title
     * @default "Ask AI"
     **/
    text?: string
  }
  /**
   * Show Markprompt branding
   * @default true
   **/
  showBranding?: boolean
  /**
   * Display debug info
   * @default false
   **/
  debug?: boolean
}

export type { MarkpromptOptions }
