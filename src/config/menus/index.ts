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

export const allMenus = [
  ...orchestrationDocsMenu,
  ...orchestrationApiMenu,
  ...orchestrationDeveloperToolsMenu,
  ...extensionsDocsMenu,
  ...extensionsApiMenu,
  ...extensionsDeveloperToolsMenu,
  ...scoreDocsMenu,
]
