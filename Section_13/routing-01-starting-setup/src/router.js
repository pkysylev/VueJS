import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
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
    next();
    //next('/users');
    
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' } });
    // }

    //next(false);
});

export default router;