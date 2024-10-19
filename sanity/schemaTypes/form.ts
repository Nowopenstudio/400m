import { useInitialValue } from "sanity";

export default{
    name: 'form',
    type: 'document',
    title:'Forms',
    fields:[
    {
        name:'disclaim',
        type:'array',
        title:'Disclaimer',
        of:[{
            name:'point',
            type:'object',
            title:'Point',
            fields:[{
                type:'array',
                name:'single',
                title:'Single Point',
                of:[{type:'block'}]
            }]
        }]
    },
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
                    name:"intro",
                    type:'array',
                    title:'intro',
                    of:[{type:'block'}]
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

     },{
        type:'array',
        name:'appSuccess',
        title: "Successful Application Note",
        of:[{type:'block'}]
     },
     {
        type:'string',
        name:'emailSub',
        title: "Application Email Subject",
     },
     {
        type:'text',
        name:'emailer',
        title: "Application Email Message",
     },
     {
        type:'array',
        name:'contactSuccess',
        title: "Successful Email Note",
        of:[{type:'block'}]
     }
    ]
}