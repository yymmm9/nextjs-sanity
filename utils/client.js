import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "efvz7syw",
    dataset: "production",
    useCdn: false,
    apiVersion: "2021-03-25"
})