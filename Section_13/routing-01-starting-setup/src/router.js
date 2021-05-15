import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        // { path: '/teams', component: TeamsList, alias: '/' },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter');
                console.log(to, from);
                next();
            }
        },
        // { path: '/:notFound(.*)', redirect: '/teams' }
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        //console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        };
    }
});

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        var userHasAPermission = confirm(`This page requires a special persmission to visit 🞱${to.name}🞱 page. \r\n Do you have it?`);
        next(userHasAPermission);
    } else {
        next();
    }
    //next('/users');

    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } });
    // }

    //next(false);
});

// afterEach will only run once a navigation has been confirmed
// In here you can't change that anymore, you can't deny a navigation (in comparison with beforeEach) 
// You can only do as in the before hooks\guards
router.afterEach((to, from) => {
    // Could be helpful to sending analytics data
    console.log('Global afterEach');
    console.log(to, from);
});

export default router;