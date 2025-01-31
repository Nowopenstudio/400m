export const myStructure = (S:any) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Info')
          .child(S.documentTypeList('info')),
        S.listItem()
          .title('Structure')
          .child(S.document().title('Structure').schemaType('structure').documentId('structure')),
        S.divider(),
        S.listItem()
          .title('Projects')
          .child(S.documentTypeList('project')),
        S.divider(),
        S.listItem()
          .title('Jobs')
          .child(S.document().title('Jobs').schemaType('jobs').documentId('jobs')),
        S.listItem()
          .title('Forms')
          .child(S.document().title('Forms').schemaType('form').documentId('form')),
        S.listItem()
          .title('Application')
          .child(
            S.list().title('Status').items([
              S.listItem().title('Pending').child(
                S.documentTypeList('application')
                .title('Pending')
                .filter('_type == "application" && status == "pending"')
              ),
              S.listItem().title('Selected').child(
                S.documentTypeList('application')
                .title('Selected')
                .filter('_type == "application" && status == "select"')
              ),
              S.listItem().title('Trial Period').child(
                S.documentTypeList('application')
                .title('Trial Period')
                .filter('_type == "application" && status == "trial"')
              ),
              S.listItem().title('Creative Member').child(
                S.documentTypeList('application')
                .title('Creative Member')
                .filter('_type == "application" && status == "creative"')
              ),
              S.listItem().title('Aspiring Worker-Member').child(
                S.documentTypeList('application')
                .title('Aspiring Worker-Member')
                .filter('_type == "application" && status == "aspiring"')
              )]
             
            )
              
         
          ),
        S.divider(),
        S.listItem()
          .title('Departments')
          .child(S.documentTypeList('department')),
        S.listItem()
          .title('Settings')
          .child(S.document().title('Settings').schemaType('settings').documentId('settings')),
         
  
          ...S.documentTypeListItems().filter(listItem => !['application', 'info','department','project','form','settings','structure','jobs'].includes(listItem.getId())),
  
  
    
    
  ])