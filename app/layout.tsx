import React from 'react'
export const metadata = {
  title: 'Blog - App Router',
  description: 'Exemplo de blog com rotas dinâmicas e SEO'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '20px' }}>
        <header>
          <h1>Meu Blog (App Router)</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
