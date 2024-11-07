export default{
    name: 'info',
    type: 'document',
    title:'Infomation',
    fields:[{
        name:'title',
        type:'string',
        title:'Header'
    },
    {
        name:'slug',
        type:'slug',
        title:'slug',
        options:{
            source:'title'
        }
    },
    {   name:'content',
        type:'array',
        title:'Content',
        options:{sortable:true,layout:"tags"},
        of:[{
            name:"section",
            type: "object",
            title:'Section',
            fields:[
                {
                    name:"subhead",
                    type:'string',
                    title:"Section Header"
                },
                {
                    name:"content",
                    type:'array',
                    title:"Content",
                    of:[{type:"block"}]
                }
            ]
        }]

     },
     {
        type:"image",
        name:"cover",
        title:"image"
     }
    ]
}