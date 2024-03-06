import {createClient} from 'contentful'

const clientContentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default clientContentful
