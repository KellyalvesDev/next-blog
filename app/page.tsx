import React from 'react'
import path from 'path'
import { promises as fs } from 'fs'
import Link from 'next/link'
import { makeSlug } from '../lib/slugify'

export const dynamic = 'force-static' // force SSG for the listing

async function getArticles() {
  const file = path.join(process.cwd(), 'data', 'artigos.json')
  const content = await fs.readFile(file, 'utf8')
  return JSON.parse(content)
}

export default async function Page() {
  const artigos = await getArticles()
  return (
    <section>
      <h2>Artigos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {artigos.map((a: any) => {
          const slug = makeSlug(a.title)
          return (
            <li key={slug} style={{ marginBottom: '18px' }}>
              <Link href={`/artigos/${slug}`}>
                <a style={{ fontSize: '18px', fontWeight: 600 }}>{a.title}</a>
              </Link>
              <div style={{ fontSize: '14px', color: '#666' }}>
                {a.author} • {a.date}
              </div>
              <p>{a.summary}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
