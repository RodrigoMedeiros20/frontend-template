import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import { APP_STORAGE_PREFIX } from '@/shared/config/app'
import { i18n } from '@/shared/config/i18n'
import { routes } from './routes'

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  render(<RouterProvider router={router} />)
}

describe('app', () => {
  afterEach(async () => {
    await i18n.changeLanguage('pt-BR')
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('shows the home page by default', () => {
    renderAt('/')

    expect(
      screen.getByRole('heading', { name: 'Seu novo projeto' }),
    ).toBeInTheDocument()
  })

  it('toggles the theme and remembers the choice', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getByRole('button', { name: /modo escuro/i }))

    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem(`${APP_STORAGE_PREFIX}:theme`)).toBe('dark')
  })

  it('switches the language to English and remembers it', async () => {
    const user = userEvent.setup()
    renderAt('/')

    await user.click(screen.getByRole('combobox', { name: 'Idioma' }))
    await user.click(await screen.findByRole('option', { name: 'English' }))

    expect(
      screen.getByRole('heading', { name: 'Your new project' }),
    ).toBeInTheDocument()
    expect(localStorage.getItem(`${APP_STORAGE_PREFIX}:language`)).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })
})
