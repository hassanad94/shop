import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({

    projectId: 'kk7gs13t',
    dataset: 'production',
    apiVersion:'2022-07-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITYTOKEN

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);