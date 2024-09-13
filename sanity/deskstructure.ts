export const myStructure = (S:any) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Info')
          .child(S.documentTypeList('info')),
        S.divider(),
        S.listItem()
          .title('Projects')
          .child(S.documentTypeList('project')),
        S.listItem()
          .title('Departments')
          .child(S.documentTypeList('department')),
        S.divider(),
        S.listItem()
          .title('Forms')
          .child(S.document().title('Forms').schemaType('form').documentId('form')),
        S.divider(),
        S.listItem()
          .title('Settings')
          .child(S.document().title('Settings').schemaType('settings').documentId('settings')),
         
  
          ...S.documentTypeListItems().filter(listItem => !['info','department','project','form','settings'].includes(listItem.getId())),
  
  
    
    
  ])