const filesInterface = {
  component: 'component',
  css: 'css',
};

export const files = [filesInterface.component, filesInterface.css];

export const filesInfo = {
  [filesInterface.component]: {
    name: (name) => `${name}.jsx`,
    content: (name, camelCaseName) => (
      `import './${camelCaseName}.scss';\n` +
      '\n' +
      `const ${name} = () => {\n` +
      '  return (\n' +
      `    <div className="${camelCaseName}">\n` +
      `      ${name}\n` +
      '    </div>\n' +
      '  );\n' +
      '};\n' +
      '\n' +
      `export default ${name};`
    ),
  },
  [filesInterface.css]: {
    name: (name) => `${name}.scss`,
    content: (_name, camelCaseName) => (
      `.${camelCaseName} {\n` +
      '  background-color: #fbeeff;\n' +
      '  color: #000;\n' +
      '}\n'
    ),
  },
};
