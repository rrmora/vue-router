import {createRouter, createWebHashHistory} from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

const routes = [
    // {
    //     path: '/', 
    //     name: 'home',
    //     component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
    // },
    {
        path: '/', 
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '../modules/pokemon/layout/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/pokemon/pages/AboutPage')
            },
            {
                path: ':id', 
                name: 'pokemon-id', 
                component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
                props: (route) => { 
                    const id  = Number(route.params.id)
                    console.log(id)
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: {name: 'pokemon-home'}
            }
        ]
    },
    {
        path: '/dragonball',
        name: 'dragonball',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/* webpackChunkName: "DragonballLayout" */ '../modules/dragonBall/layout/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dragonball-characters',
                component: () => import(/* webpackChunkName: "CharactersPage" */ '../modules/dragonBall/pages/CharactersPage')
            },
            {
                path: 'about',
                name: 'dragonball-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '../modules/dragonBall/pages/AboutPage')
            },
            {
                path: '',
                redirect: {name: 'dragonball-characters'}
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "noPageFound" */ '../modules/shared/pages/NoPageFound')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// //// GARD GLOBAL SINCRONO
// router.beforeEach((to, from, next) => {
//     const rnd = Math.random() * 100
//     if (rnd > 50) {
//         console.log('Autenticado')
//         next()
//     } else {
//         console.log(rnd, 'Bloqueado por el foreach Guard')
//         next({name: 'pokemon-home'})
//     }
//     // next()
// })

// const canAccess = () => {
//     return new Promise((resolve, reject) => {
//         const rnd = Math.random() * 100
//         if (rnd > 50) {
//             console.log('Autenticado')
//             resolve(true)
//         } else {
//             console.log(rnd, 'Bloqueado por el foreach Guard')
//             resolve(false)        }
//     })
// }

// router.beforeEach( async(to, from, next) => {
//     const auth = await canAccess()
//     auth ? next() : next({name: 'pokemon-home'})
// })

export default router