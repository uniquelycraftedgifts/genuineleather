export default {
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Category Name",
            name: "category_name",
            type: "string",
        },
        {
            title: "Category Image",
            name: "category_image",
            description: "A single image to describe this category",
            type: "image",
        }
    ]
}