import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <>
      <h1>{t('title')}</h1>
      <LanguageSwitcher />
    </>
  )
}
