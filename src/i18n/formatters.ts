import type { Locales, Formatters } from './i18n-types'
import type { AsyncFormattersInitializer } from 'typesafe-i18n'

export const initFormatters: AsyncFormattersInitializer<Locales, Formatters> = async () => {
  const formatters: Formatters = {
    // add your formatter functions here
  }

  return formatters
}
