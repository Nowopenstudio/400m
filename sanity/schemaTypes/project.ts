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

     }
    ]
}