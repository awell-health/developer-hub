import { PrismTheme } from 'prism-react-renderer'

export const darkTheme: PrismTheme = {
  plain: {
    backgroundColor: 'inherit',
  },
  styles: [
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#ffc18f',
        fontWeight: 'bold',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#959DAA',
      },
    },
    {
      types: [
        'property',
        'tag',
        'boolean',
        'number',
        'constant',
        'symbol',
        'deleted',
        'class-name',
        'function',
      ],
      style: {
        color: '#ffa3e0',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: '#8bf6f2',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: 'inherit',
        background: 'transparent',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#ad9bf6',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#ffe88e',
      },
    },
  ],
}
