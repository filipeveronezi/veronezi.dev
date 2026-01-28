import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: [
      'eslint.config.mjs',
      '.next/**',
      '.env',
      'node_modules',
      'public/**',
      'next.config.js',
      'postcss.config.js',
      'postcss.config.mjs',
      '.mastra/**',
      '**/*.css',
      'tailwind.config.js'
    ]
  },
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/app/globals.css'
      }
    }
  },
  js.configs.recommended,
  ...nextCoreWebVitals,
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.amd,
        ...globals.node
      },
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          tsx: true
        },
        project: true,
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      ...eslintConfigPrettier.rules,

      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'error',
        {
          strictness: "loose",
          printWidth: 120,
          group: 'emptyLine'
        }
      ],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/tabindex-no-positive': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off'
    }
  }
]
