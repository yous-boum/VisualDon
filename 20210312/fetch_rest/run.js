const R = require('ramda')
const fetch = require('node-fetch')

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts'

const get = url => fetch(url).then(r => r.json());

const f = async () => {
    const posts = await get(URL_POSTS)
    const users = await get(URL_USERS)

    const titresPosts = posts.reduce((r, d)=>{
        const prev = r[d.userId] || [];
        return {
            ...r,
            [d.userId]:[...prev, d.title]
        }
    },{})

    const user = users.map(d => ({
        id: d.id,
        nom_utilisateur: d.username,
        ville: d.address.city,
        nom_companie: d.company.name,
        titres_posts: titresPosts[d.id]
    }))


    console.log(user);

}

f()