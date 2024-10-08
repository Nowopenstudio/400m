export default{
    name: 'project',
    type: 'document',
    title:'Project',
    fields:[
    {
        name:"logo",
        type:'image',
        title:'icon'
    },    
    {
        name:'title',
        type:'string',
        title:'Header'
    },
    {
        name:'status',
        type:'string',
        title:'Status'
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
        name:"dept",
        type:"reference",
        title:"Department",
        to:[{type: "department"}]
    },
    {
        name:"desc",
        type:"array",
        title:'Description',
        of:[{type:"block"}]
    },
    {   name:'content',
        type:'array',
        title:'Content',
        options:{sortable:true,layout:"grid"},
        of:[{
            name:"section",
            type: "object",
            title:'Image',
            fields:[
                {
                    name:"image",
                    type:'image',
                    title:"file"
                },
                {
                    name:"desc",
                    type:'array',
                    title:"Content",
                    of:[{type:"block"}]
                }
            ]
        }]

     },
     {   name:'social',
        type:'array',
        title:'Social Links',
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
                    name:"url",
                    type:'url',
                    title:"URL",
                    validation: Rule => Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel']
                      })
                }
            ]
        }]

     }
    ]
}