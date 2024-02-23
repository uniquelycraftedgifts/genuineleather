export default {
    title: "Colour",
    name: "colour",
    type: "document",
    fields: [
        {
            title: "Colour Name",
            name: "colour_name",
            type: "string",
        },
        {
            title: "Colour Code",
            name: "colour_code",
            description: "The colour code the client will put on the order form.",
            type: "string",
        },
        {
            title: "Colour Hex",
            name: "colour_hex",
            description: "The colour that will appear on the website.",
            type: "string",
        },
    ]
}