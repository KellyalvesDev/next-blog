import slugifyLib from 'slugify'

export function makeSlug(title: string) {
  // Use slugify lib; fallback to simple replacement
  if (!title) return ''
  try {
    return slugifyLib(title, { lower: true, strict: true })
  } catch (e) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
}
