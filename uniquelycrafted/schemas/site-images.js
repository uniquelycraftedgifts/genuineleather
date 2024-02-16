export default {
    title: "Site Images",
    name: "site_images",
    description: "These are the images that appear accross the website, not product images.",
    type: "document",
    fields: [
        {
            title: "Logo",
            name: "logo",
            description: "Your Logo, with a transparent background.",
            type: "image",
        },
        {
            title: "Hero Image",
            name: "hero_image",
            description: "The Background Image at the top of the Home Page.",
            type: "image",
        },
        {
            title: "Story Image",
            name: "story_image",
            description: "The Backgrouund Image on the 'Our Story' section.",
            type: "image",
        },
        {
            title: "Footer Image",
            name: "footer_image",
            description: "The Background Image at the bottom of every page in the Contact Area.",
            type: "image",
        },
    ]
}