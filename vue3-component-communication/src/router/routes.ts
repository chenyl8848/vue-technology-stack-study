export default [
    {
        path: '/01-props',
        component: () => import('@/views/01-props/index.vue')
    },
    {
        path: '/02-custom-event',
        component: () => import('@/views/02-custom-event/index.vue')
    },
    {
        path: '/03-bus-event',
        component: () => import('@/views/03-bus-event/index.vue')
    },
    {
        path: '/04-v-model',
        component: () => import('@/views/04-v-model/index.vue')
    },
    {
        path: '/05-attrs',
        component: () => import('@/views/05-attrs/index.vue')
    },
    {
        path: '/06-ref-parent',
        component: () => import('@/views/06-ref-parent/index.vue')
    },
    {
        path: '/07-provide-inject',
        component: () => import('@/views/07-provide-inject/index.vue')
    },
    {
        path: '/08-pinia',
        component: () => import('@/views/08-pinia/index.vue')
    },
    {
        path: '/09-slot',
        component: () => import('@/views/09-slot/index.vue')
    },
]