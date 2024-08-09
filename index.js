require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Nickss5",
  "id": 174589314,
  "node_id": "U_kgDOCmgFgg",
  "avatar_url": "https://avatars.githubusercontent.com/u/174589314?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nickss5",
  "html_url": "https://github.com/Nickss5",
  "followers_url": "https://api.github.com/users/Nickss5/followers",
  "following_url": "https://api.github.com/users/Nickss5/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nickss5/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nickss5/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nickss5/subscriptions",
  "organizations_url": "https://api.github.com/users/Nickss5/orgs",
  "repos_url": "https://api.github.com/users/Nickss5/repos",
  "events_url": "https://api.github.com/users/Nickss5/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nickss5/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nishma_M",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-03T07:24:09Z",
  "updated_at": "2024-08-06T17:19:11Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('<h1>please</h1>')
  })

app.get('/github',(req,res) => {
  res.json(githubData)
  console.log('Hai there')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})