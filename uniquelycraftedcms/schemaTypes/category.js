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
            title: "Slug",
            name: "category_slug",
            description: "A lowercase version of category name separeted by underscores: EG: Category Name becomes category_name. DO NOT use other characters or numbers.",
            type: "string"
        },
        {
            title: "Category Image",
            name: "category_image",
            description: "A single image to describe this category",
            type: "image",
        }
    ]
}