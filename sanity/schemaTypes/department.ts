export default{
    name: 'department',
    type: 'document',
    title:'Infomation',
    fields:[{
        name:'title',
        type:'string',
        title:'Name'
    },
    {
        name:'slug',
        type:'slug',
        title:'slug',
        options:{
            source:'title'
        }
    },
    {
        name:'desc',
        type:'array',
        title:'Description',
        of:[{type:"block"}]
    },
    {
        name:'cover',
        type:'image',
        title:'Cover'
    }
    ]
}