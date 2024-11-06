// TODO: Change this to 'messages.js' and add info messages used in create.js

export const errors = {
  validations: {
    args: 'You must specify action type and component name',
    types: 'Invalid action type (component or page)',
    name: {
      format: (name) => `Name "${name}" should be in PascalCase`,
    },
    structure: {
      exists: 'Component already exists',
    },
  },
  structure: {
    folders: (error) => `Could not create structure folder: ${error}`,
  },
};
