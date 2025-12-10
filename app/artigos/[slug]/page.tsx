import React from 'react'
import path from 'path'
import { promises as fs } from 'fs'
import { makeSlug } from '../../../lib/slugify'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static' // SSG per article

async function getArticles() {
  const file = path.join(process.cwd(), 'data', 'artigos.json')
  const content = await fs.readFile(file, 'utf8')
  return JSON.parse(content)
}

export async function generateStaticParams() {
  const artigos: any[] = await getArticles()
  return artigos.map(a => ({ slug: makeSlug(a.title) }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const artigos: any[] = await getArticles()
  const article = artigos.find(a => makeSlug(a.title) === params.slug)
  if (!article) {
    return {
      title: 'Artigo não encontrado',
      description: 'Não foi possível encontrar o artigo.'
    }
  }
  return {
    title: `${article.title} — ${article.author}`,
    description: article.summary
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const artigos: any[] = await getArticles()
  const article = artigos.find(a => makeSlug(a.title) === params.slug)
  if (!article) notFound()

  return (
    <article>
      <h2>{article.title}</h2>
      <div style={{ color: '#666', marginBottom: '12px' }}>
        {article.author} • {article.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
