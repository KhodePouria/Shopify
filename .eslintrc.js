module.exports = {
  extends: 'next/core-web-api',
  rules: {
    // Disable rules that are triggering in generated files
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'import/no-anonymous-default-export': 'off',
  },
  ignorePatterns: [
    // Ignore generated Prisma files
    'src/generated/**/*',
  ]
}
