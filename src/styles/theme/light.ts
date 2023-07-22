export default {
  title: 'light',
  colors: {
    // blue
    'blue-200': '#2E7AFF',
    'blue-500': '#1D63FF',
    'blue-600': '#0043D9',

    // green
    'green-200': '#35D9A8',

    // yellow
    'yellow-500': '#FFD76F',

    // gray
    'gray-800': '#070514',
    'gray-700': '#0D0B1A',
    'gray-600': '#131020',
    'gray-500': '#1E1C2D',
    'gray-400': '#2A2739',
    'gray-300': '#353345',
    'gray-200': '#413E52',
    'gray-100': '#4C4A5E',
    'gray-50': '#757385',

    // zinc
    'zinc-400': '#CBD6E2',
    'zinc-100': '#F2F5FC',
  },
  media: {
    sm: `@media (max-width: 640px)`,
    md: `@media (max-width: 768px)`,
    lg: `@media (max-width: 1024px)`,
    xl: `@media (max-width: 1280px)`,
    '2xl': `@media (max-width: 1536px)`,
  },
} as const
