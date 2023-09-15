import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
}

export const client = createClient(config)

export const urlFor = (source) => 
  createImageUrlBuilder(config).image(source)