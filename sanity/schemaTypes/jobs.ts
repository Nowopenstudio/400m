import { useInitialValue } from "sanity";

export default{
    name: 'jobs',
    type: 'document',
    title:'Jobs',
    fields:[
    {   name:'sections',
        type:'array',
        title:'Sections',
        options:{sortable:true,layout:"tags"},
        of:[{
            name:"section",
            type: "object",
            title:'Type',
            fields:[

                  {
                    name:"image",
                    type:'image',
                    title:"Image"
                 },
                 {
                    name:'title',
                    type:'string',
                    title: 'Title'
                 },
                 {
                    name:"text",
                    type:'array',
                    title:"Text",
                    of:[{type:"block"}]
                }

            ]
        }]

     }
    ]
}