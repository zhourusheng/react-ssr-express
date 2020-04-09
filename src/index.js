import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './components/Home'

const app = express()
const content = renderToString(<Home />)

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR</title>
    </head>
    <body>
      ${content}
    </body>
  </html>
  `)
})

app.listen(3003, () => {
  console.log('listening at 3003...')
})

// @babel/core 核心包
// @babel/preset-env 解析es的包,智能识别当前运行环境并进行转换
// @babel/preset-react 解析jsx的包
// @babael/plugin-transform-runtime 使es6中的api类似generator,promise对象等生效
