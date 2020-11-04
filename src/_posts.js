const fs = require('fs')
const marked = require('marked')
const hljs = require('highlight.js')
const fm = require('front-matter')

marked.use({
  renderer: {
    code(code, lang, escaped) {
      if (lang) {
        const highlighted = hljs.highlight(lang, code).value
        return `<pre><div class="copy-me" onclick="copyCode(this)">Copy</div><code>${highlighted}</code></pre>`
      }

      return `<pre><div class="copy-me" onclick="copyCode(this)">Copy</div><code>${code}</code></pre>`
    }
  }
})

const postFiles = fs.readdirSync('posts')

const isDev = process.env.NODE_ENV === 'development'

const posts = []
const categories = ['category']
for (let i = 0; i < postFiles.length; i++) {
  const postContent = fs.readFileSync(`posts/${postFiles[i]}`, {
    encoding: 'utf-8'
  })
  const { body, ...frontMatter } = fm(postContent)
  const { attributes } = frontMatter
  const { slug, title, categories, tags, date, published, summary } = attributes
  if (!published && !isDev) continue
  posts.push({
    html: marked(body),
    date,
    slug,
    title,
    categories,
    tags,
    summary
  })
}

export { posts, categories }
