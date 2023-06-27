export const anchorItems = [
  {
    key: 'useCallback',
    href: '#useCallback',
    title: 'useCallback',
    children: [
      {
        key: '注意事项',
        href: '#注意事项1',
        title: '注意事项',
      },
      {
        key: '用法',
        href: '#用法',
        title: '用法',
        children: [
          {
            key: 'skipping-re-rendering-of-components',
            href: '#skipping-re-rendering-of-components',
            title: 'Skipping re-rendering of components',
            tooltip: true,
            children: [
              {
                key: 'memo example',
                href: '#memo-example',
                title: 'memo example',
              },
              {
                key: 'without useCallback',
                href: '#without-useCallback',
                title: 'without useCallback',
              },
              {
                key: 'with useCallback',
                href: '#with-useCallback',
                title: 'with useCallback',
              },
              {
                key: '注意事项',
                href: '#注意事项2',
                title: '注意事项',
              },
              {
                key: '深入探讨2.1',
                href: '#深入探讨2.1',
                title: '深入探讨',
              },
              {
                key: '应用示例2.1',
                href: '#应用示例2.1',
                title: '应用示例',
              },
            ]
          },
          {
            key: 'updating-state-from-a-memoized-callback',
            href: '#updating-state-from-a-memoized-callback',
            title: 'Updating state from a memoized callback ',
            tooltip: true,
          },
          {
            key: 'Optimizing a custom Hook ',
            href: '#Optimizing-a-custom-Hook ',
            title: 'Optimizing a custom Hook ',
            tooltip: true,
          },

        ],
      },
      {
        key: 'Troubleshooting',
        href: '#Troubleshooting',
        title: 'Troubleshooting ',
        children: [
          {
            key: 'Every time my component renders, useCallback returns a different function',
            href: '#useCallback-returns-a-different-function',
            title: 'Every time my component renders, useCallback returns a different function ',
            tooltip: true,
          },
          {
            key: 'I need to call useCallback for each list item in a loop, but it’s not allowed',
            href: '#call-useCallback-for-each-list-item-in-a-loop',
            title: 'I need to call useCallback for each list item in a loop, but it’s not allowed',
            tooltip: true,
          },
        ]
      },
    ]
  },
];
