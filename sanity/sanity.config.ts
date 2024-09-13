import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { myStructure } from './deskstructure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '400m',

  projectId: 'qzuc4ihq',
  dataset: 'production',
  token:'skHjMPGMH3o2GGErtDTSN1xSiXgronyh0ljnMCjQTpW0EnndF5PzImCfUZZr2RS0PBIsbVwyJsBw0LcKwJngEHo6nFiMVJeTs4VgycbbJkP84PxyiGB7lfcSuKKxsfIHBPKbzZs2KOU03mMbfscissWBNq2iIsVsaKD3dMze2SfIISirq36P',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
