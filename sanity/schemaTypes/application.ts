export default{
    name: 'application',
    type: 'document',
    title:'Application',
    fields:[
            {
                type:"string",
                name:"firstName",
                title:'First Name'
            },
            {
                type:"string",
                name:"lastName",
                title:'Last Name',
            },
            {
                name:'status',
                type:'string',
                title:'Status',
                options:{
                    list: [
                        { "title": "Pending", "value": "pending"},
                        { "title": "Selected", "value": "select"},
                        { "title": "Trial", "value": "trial"},
                        { "title": "Creative Member", "value": "creative"},
                        { "title": "Aspiring Worker Member", "value": "aspiring"},
                      
                        
                      ]
                }
            },
            {
                type:"string",
                name:"email",
                title:'Email'
            },
            {
                type:"url",
                name:"website",
                title:'Website',
            
    },
    {
        type:"array",
        name:"answers",
        title:"answers",
        of:[{
            type:'object',
            name:'single',
            title: "Single",
            fields:[
                {type:'array',
                    name:"quest",
                    title:"Question",
                    of:[{type:"block"}]
                },
                {type:'text',
                    name:"answer",
                    title:"Answer"
                }
            ]
        }]
    }
    ],
    preview: {
        select: {
          title: 'firstName',
          subtitle:'lastName'
        }
      }

}