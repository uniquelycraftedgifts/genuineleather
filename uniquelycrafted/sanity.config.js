import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'UniquelyCrafted',

  projectId: 'enggryq3',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Uniquely Crafted Content')
          .items([
            S.listItem()
              .title('Contact Details')
              .child(
                S.document()
                  .title("Contact Details")
                  .schemaType('contact_details')
                  .documentId('contact_details')
              ),
            S.listItem()
                .title("Home Page")
                .child(
                  S.document()
                    .title("Home Page")
                    .schemaType('home_page')
                    .documentId('home_page')
                ),
            S.listItem()
                    .title("Site Images")
                    .child(
                        S.document()
                            .title("Site Images")
                            .schemaType("site_images")
                            .documentId("site_images")
                    ),
            ...S.documentTypeListItems().filter(
                listItem => !['contact_details'].includes(listItem.getId()) 
                && !['home_page'].includes(listItem.getId())
                && !['site_images'].includes(listItem.getId())
            )
          ])
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
