import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation } from 'react-router'
import { useAnimateOnLanguageChange } from '@/features/change-language'
import { ThemeToggle, useTheme } from '@/features/toggle-theme'

export function AppLayout() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)

  useAnimateOnLanguageChange(contentRef)

  return (
    <div className="min-h-screen">
      <header className="border-border bg-card border-b transition-colors duration-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <span className="text-lg font-bold tracking-tight">
            {t('app.name')}
          </span>
          <div className="w-44">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div key={location.pathname} ref={contentRef} className="animate-rise">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
