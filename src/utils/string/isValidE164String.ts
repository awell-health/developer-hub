import { parsePhoneNumberFromString } from 'libphonenumber-js'

/**
 * Function to check if a given string only has valid E.164 format characters,
 * starts with a plus sign, and is a possible phone number (<= 15 digits, correct country code)
 * Returns true only if all of these conditions are met, false otherwise
 * Valid characters are: +, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 */
export const isValidE164String = (text: string): boolean => {
  const validCharacters = /^\+[0-9]+$/
  return (
    validCharacters.test(text) &&
    text.startsWith('+') &&
    (parsePhoneNumberFromString(text)?.isPossible() ?? false)
  )
}
