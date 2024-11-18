import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { myStructure } from './deskstructure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { muxInput } from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: '400m',

  projectId: 'qzuc4ihq',
  dataset: 'production',
  token:'skKTTyI8cXzzTi7fuSq4Q9znPhAVtnYrvYawK5Ye9iO695me8aDC9IowxOWZzhs8VMxNDtmgGwoCyW5NeDOfUHJtiFOO1eBjqBMElJ7YsioANtJxV0alziU3nOikTjUSWTR4F0VktdXOoPtJauAChNDIg84lk89vfJOVVJ0MXx5WPczMMJu1',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),muxInput()],

  schema: {
    types: schemaTypes,
  },
})
