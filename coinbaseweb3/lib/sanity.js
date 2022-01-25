import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url' 

export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-01-25",
    useCdn:false, // to get fresh data always
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)