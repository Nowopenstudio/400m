import { useInitialValue } from "sanity";

export default{
    name: 'form',
    type: 'document',
    title:'Forms',
    fields:[
    {   name:'section',
        type:'array',
        title:'Questionaires',
        options:{sortable:true,layout:"tags"},
        of:[{
            name:"form",
            type: "object",
            title:'Type',
            fields:[
                {
                    name:"title",
                    type:'string',
                    title:"Title"
                },
                {
                    name:"type",
                    type:'boolean',
                    title:"Checklist",
                    useInitialValue:false
                },
                {
                    name:"single",
                    type:'array',
                    title:'Single Question',
                    of:[{
                        type:'object',
                        name:"question",
                        title:"Question",
                        fields:[{
                            name:"content",
                            type:'array',
                            title:"Content",
                            of:[{type:"block"}]

                        }]
                    }]
                }

            ]
        }]

     }
    ]
}