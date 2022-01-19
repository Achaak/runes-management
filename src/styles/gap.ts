import { detect } from 'detect-browser'

export const gap = {
  customGap: (value: number): Record<string, unknown> => {
    const browser = detect()

    const supported = {
      gap: value,
    }

    const notSupported = {
      '& > *': {
        margin: value / 2,
      },
    }

    if (!browser) return supported
    if (browser.name !== 'safari') return supported

    // Is Safari
    return notSupported
  },
  customColumnGap: (value: number): Record<string, unknown> => {
    const browser = detect()

    const supported = {
      columnGap: `${value}px`,
    }

    const notSupported = {
      '& > *:not(:last-child):not(:first-child)': {
        marginLeft: value / 2,
        marginRight: value / 2,
      },
      '& > *:first-child': {
        marginRight: value / 2,
      },
      '& > *:last-child': {
        marginLeft: value / 2,
      },
    }

    if (!browser) return supported
    if (browser.name !== 'safari') return supported

    // Is Safari
    return notSupported
  },
  customRowGap: (value: number): Record<string, unknown> => {
    const browser = detect()

    const supported = {
      rowGap: `${value}px`,
    }

    const notSupported = {
      '& > *:not(:last-child):not(:first-child)': {
        marginTop: value / 2,
        marginBottom: value / 2,
      },
      '& > *:first-child': {
        marginBottom: value / 2,
      },
      '& > *:last-child': {
        marginTop: value / 2,
      },
    }

    if (!browser) return supported
    if (browser.name !== 'safari') return supported

    // Is Safari
    return notSupported
  },
}
