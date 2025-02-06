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
                {name:"email",type:"string", title:"Email"}
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

     },
     {
        name:'code',
        type:'file',
        title:"Code of Conduct"
     },
     {
        name:'meta',
        type:'object',
        title:'meta',
        fields:[
            {
                name:'title',
                type:'string',
                title:'Title'
        },
        {
            name:'description',
            type:'text',
            title:'description'
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        }
    ]
     }
    ]
}