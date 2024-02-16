export default {
    title: "Contact Details",
    name: "contact_details",
    description: "Your contact details that will appear on the website.",
    type: "document",
    fields: [
        {
            title: "Address",
            name: "address",
            type: "string",
        },
        {
            title: "Phone Number",
            name: "phone_number",
            description: "[Format: 123 456 7890]",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ]
        },
        {
            title: "WhatsApp Number",
            name: "whatsapp_number",
            description: "[Format: 123 456 7890]",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ]
        },
        {
            title: "Email Address",
            name: "email_address",
            description: "[Format: example@email.com]",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ]
        },
        {
            title: "Social Links",
            name: "social_links",
            type: "array",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            title: "Platform",
                            name: "platform",
                            type: "string",
                        },
                        {
                            title: "Handle/Name",
                            name: "handle",
                            type: "string",
                        },
                        {
                            title: "Link",
                            name: "link",
                            type: "url",
                        },
                        {
                            title: "Icon",
                            name: "icon",
                            description: "Icon as copied from Fontawesome. [Format: <i class='fa-regular fa-copyright'></i>]",
                            type: "string",
                        }
                    ]
                }
            ]
        },
        {
            title: "Designed By",
            name: "designed_by",
            description: "Site designer's contact information.",
            type: "document",
            fields: [
                {
                    title: "Designer Name",
                    name: "designer_name",
                    type: "string",
                },
                {
                    title: "Designer Contact",
                    name: "designer_contact",
                    type: "array",
                    of: [
                        {
                            type: "document",
                            fields: [
                                {
                                    title: "Method",
                                    name: "method",
                                    type: "string",
                                },
                                {
                                    title: "Icon",
                                    name: "icon",
                                    type: "string",
                                },
                                {
                                    title: "Link",
                                    name: "link",
                                    type: "string",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
