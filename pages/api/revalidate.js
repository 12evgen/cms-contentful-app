import clientContentful from "../../lib/contentfull";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
    return res.status(401).json({message: 'Invalid Secret'})
  }

  // Get a list of URLs for any new, updated, or deleted documents
  //const urls = documents.items.map((doc) => `posts/${doc.fields.slug}`)

  try {
    const slug = JSON.parse(req.body)?.fields.slug
    const url = `/posts/${Object.values(slug)[0]}`
    await res.revalidate(url)
    await res.revalidate('/')
    return res.json({revalidated: true})
  } catch (err) {
    // If there was an error, Next.js will continue to show
    // the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
