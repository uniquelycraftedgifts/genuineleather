export default {
    title: "Two Tone",
    name: "two_tone",
    description: "Two toned colours for products.",
    type: "document",
    fields: [
        {
            title: "Two Tone Name",
            name: "two_tone_name",
            type: "string",
        },
        {
            title: "Two Tone Code",
            name: "two_tone_code",
            type: "string",
        },
        {
            title: "Colour One",
            name: "colour_one",
            type: "reference",
            to: { type: "colour", }
        },
        {
            title: "Colour Two",
            name: "colour_two",
            type: "reference",
            to: { type: "colour", }
        },
    ]
}