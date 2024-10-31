import { useInitialValue } from "sanity";

export default{
    name: 'structure',
    type: 'document',
    title:'Structure',
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
                {    name: 'contentType',
                    type: 'string',
                    title: 'Content Type',
                    initialValue: 'text',
                    options: {
                      list: [
                        { title: 'Text', value: 'text' },
                        { title: 'Image', value: 'img' }
                      ],
                    },
                  },
                  {
                    name:"image",
                    type:'image',
                    title:"Image"
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