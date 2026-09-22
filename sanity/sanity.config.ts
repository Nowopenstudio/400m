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

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),muxInput()],

  schema: {
    types: schemaTypes,
  },
})
