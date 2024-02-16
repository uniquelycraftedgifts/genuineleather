export default {
    title: "Home Page",
    name: "home_page",
    description: "The first page people will see on your website.",
    type: "document",
    fields: [
        {
            title: "Features Section",
            name: "features",
            type: "array",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            title: "Feature Title",
                            name: "title",
                            type: "string",
                        },
                        {
                            title: "Feature Description",
                            name: "description",
                            type: "text",
                        }
                    ]
                }
            ]
        },
        {
            title: "Story",
            name: "story",
            type: "document",
            fields: [
                {
                    title: "Story Title",
                    name: "title",
                    type: "string",
                },
                {
                    title: "Story Content",
                    name: "content",
                    type: "array",
                    of: [
                        {
                            type: "block",
                            styles: []
                        }
                    ]
                }
            ]
        },
        {
            title: "Terms and Conditions",
            name: "terms_conditions",
            description: "The Terms and Conditions of your services.",
            type: "array",
            of: [
                {
                    type: "block",
                }
            ]
        },
        {
            title: "Privacy Policy",
            name: "privacy_policy",
            description: "The Privacy Policy of this website.",
            type: "array",
            of: [
                {
                    type: "block",
                }
            ]
        }
    ]
}