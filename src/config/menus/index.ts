import {
  extensionsApiMenu,
  extensionsDeveloperToolsMenu,
  extensionsDocsMenu,
} from './awell-extensions'
import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from './awell-orchestration'
import { scoreDocsMenu } from './awell-score'
import { studioDocsMenu } from './awell-studio'

export const allMenus = [
  ...studioDocsMenu,
  ...orchestrationDocsMenu,
  ...orchestrationApiMenu,
  ...orchestrationDeveloperToolsMenu,
  ...extensionsDocsMenu,
  ...extensionsApiMenu,
  ...extensionsDeveloperToolsMenu,
  ...scoreDocsMenu,
]
