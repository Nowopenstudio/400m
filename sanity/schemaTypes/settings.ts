export default{
    name: 'settings',
    type: 'document',
    title:'Settings',
    fields:[{
        name:'desc',
        type:'array',
        title:'Description',
        of:[{type:'block'}]
    },
    {
        name:"contacts",
        type:'array',
        title:'Contacts',
        options:{sortable:true,layout:"tags"},
        of:[{type:"object",
            name:"single",
            title:"info",
            fields:[
                {name:"name",type:"string", title:"Name"},
                {name:"email",type:"url", title:"Email",validation: Rule => Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel']
                  })},
            ]
        }]

    },

    {   name:'org',
        type:'array',
        title:'Organizational Links',
        options:{sortable:true,layout:"tags"},
        of:[{
            name:"section",
            type: "object",
            title:'Section',
            fields:[
                {
                    name:"name",
                    type:'string',
                    title:"Name"
                },
                {
                    name:"URL",
                    type:'url',
                    title:"URL",
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel']
                      })
                },
                {
                    name:"desc",
                    type:'array',
                    title:"desc",
                    of:[{type:"block"}]
                },
                {
                    name:"cover",
                    type:'image',
                    title:"Thumb",
                   
                }
            ]
        }]

     }
    ]
}