'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { locales } from '@/i18n'
// import  LocaleLayout from '@/app/[locale]/layout'
export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          disabled={locale === currentLocale}
        >
          {locale === 'en' ? 'English' : '中文'}
        </button>
      ))}
    </div>
  )
}
