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
                type:"string",
                name:"email",
                title:'Email',
                validation: Rule => Rule.unique()
            },
            {
                type:"url",
                name:"website",
                title:'Website',
                validation: Rule => Rule.uri({
                    scheme: ['http', 'https']
                  })
            
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
                {type:'string',
                    name:"quest",
                    title:"Question"
                },
                {type:'string',
                    name:"answer",
                    title:"Answer"
                }
            ]
        }]
    }
    ]
}