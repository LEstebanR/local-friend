import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }
  return (
    <button
      onClick={toggleLanguage}
      className="h-8 w-8 cursor-pointer rounded border border-gray-500 px-2 text-xs transition-colors hover:bg-gray-100"
    >
      {i18n.language.startsWith('en') ? 'ES' : 'EN'}
    </button>
  )
}
