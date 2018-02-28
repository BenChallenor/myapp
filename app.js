const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile('/Users/marcusgardiner/Desktop/Projects/javascript_projects/myapp/index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
