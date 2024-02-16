export default {
    title: "Product Listing",
    name: "product_listing",
    type: "document",
    fields: [
        {
            title: "Product Category",
            name: "product_category",
            description: "The category this product is related to",
            validation: Rule => Rule.required(),
            type: "reference", to: { type: "category"},
        },
        {
            title: "Product Name",
            name: "product_name",
            description: "The name people will use to identify the product.",
            type: "string",
        },
        {
            title: "Product Code",
            name: "product_code",
            description: "The code people will use for this product in the order form.",
            type: "string",
        },
        {
            title: "Product Description",
            name: "product_description",
            type: "document",
            fields: [
                {
                    title: "Description",
                    name: "description",
                    description: "Information about the product.",
                    type: "string",
                },
                {
                    title: "Optional",
                    name: "optional",
                    description: "Any optional accessories the product comes with.",
                    type: "string",
                }
            ]
        },
        {
            title: "Product Size",
            name: "product_size",
            description: "What is the products height, width and depth. EG: 15cm X 10cm X 5cm",
            type: "string",
        },
        {
            title: "Product Prices",
            name: "product_prices",
            type: "array",
            of: [
                {
                    title: "Price",
                    name: "price",
                    type: "document",
                    fields: [
                        {
                            title: "Price Description",
                            name: "price_description",
                            description: "What is included in the price. EG: with / without strap.",
                            type: "string",
                        },
                        {
                            title: "Price Amount",
                            name: "price_amount",
                            description: "The price the client will pay.",
                            type: "number",
                        }
                    ]
                }
            ]
        },
        {
            title: "One Tone Colours",
            name: "one_tone",
            description: "The one tone colours this product comes in.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "colour" },
                }
            ]
        },
        {
            title: "Two Tone Colours",
            name: "two_tone",
            description: "The two tone colours this product comes in.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "two_tone" },
                }
            ]
        },
        {
            title: "Patterns",
            name: "patterns",
            description: "The material patterns this product comes in.",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "pattern" },
                }
            ]
        },
        {
            title: "Colour Deviation",
            name: "colour_deviation",
            description: "Any different / additional colours. EG: different strap colours.",
            type: "document",
            fields: [
                {
                    title: "Deviation",
                    name: "deviation",
                    description: "A description of the different / additional colour. EG: Strap Options.",
                    type: "string",
                },
                {
                    title: "Deviation One Tone",
                    name: "deviation_one_tone",
                    type: "array",
                    of: [
                        {
                            type: "reference",
                            to: { type: "colour" },
                        }
                    ]
                },
                {
                    title: "Deviation Pattern",
                    name: "deviation_pattern",
                    type: "array",
                    of: [
                        {
                            type: "reference",
                            to: { type: "pattern" },
                        }
                    ]
                }
            ]
        },
        {
            title: "Custom Material",
            name: "custom_material",
            description: "Can a client add material to a product. EG: material can be added in coin slot on client request.",
            type: "document",
            fields: [
                {
                    title: "Customizable",
                    name: "customizable",
                    description: "Can the client add a materail?",
                    type: "boolean",
                },
                {
                    title: "Customizable Component",
                    name: "customizable_component",
                    description: "Which component of the product the client can customize.",
                    type: "string",
                }
            ]
        },
        {
            title: "Product Main Image",
            name: "product_main_image",
            description: "The main image for the product.",
            type: "image",
        },
        {
            title: "Product Images",
            name: "product_images",
            description: "Any additional images for the product (OPTIONAL).",
            type: "array",
            of: [
                {
                    type: "image",
                }
            ]
        },
        {
            title: "Product Video",
            name: "product_video",
            type: "url",
        },
    ],
}