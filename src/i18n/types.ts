import type messages from './en.json'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages
  }
}
