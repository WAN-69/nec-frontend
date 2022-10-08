<template>
    <div>
        <!-- Sidebar -->
        <div class="fixed -py-2 0 w-60 h-full bg-gray-100 border border-r" id="sidenavSecExample">
            <nuxt-link to="/">
                <div class="pt-4 pb-5 px-4">
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img src="@/assets/logo/nec.png" class="rounded w-14" alt="Logo" />
                        </div>
                        <div class="grow ml-3">
                            <p
                                class="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-l from-black to-blue-600 hover:bg-gradient-to-r hover:from-black hover:to-blue-600 transition ease-in">
                                Network Engineering Club
                            </p>
                        </div>
                    </div>
                </div>
            </nuxt-link>
            <ul class="relative px-1">
                <li v-for="(data,index) in navItems" :key="index" class="relative" :id="`sidenav${index}`">
                    <nuxt-link :to="data.link == '#' ? {} : data.link"
                        :class="`${$nuxt.$route.name == data.routeName ? 'text-blue-600 bg-blue-50' : 'text-gray-500'} flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-semibold text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer`"
                        :data-bs-toggle="data.isNested ? 'collapse' : ''"
                        :data-bs-target="data.isNested ? `#collapseSidenav${index}` : ''"
                        :aria-expanded="data.isNested ? true :false"
                        :aria-controls="data.isNested ? `collapseSidenav${index}` : ''">
                        <!-- <span><icons-sidenav-dashboard/></span> -->
                        <span v-html="data.icon"></span>
                        <span>{{ data.title }}</span>
                        <svg v-if="data.isNested" aria-hidden="true" focusable="false" data-prefix="fas"
                            class="w-3 h-3 ml-auto " role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                            </path>
                        </svg>
                    </nuxt-link>
                    <ul v-if="data.isNested" class="relative accordion-collapse collapse"
                        :id="`collapseSidenav${index}`" :aria-labelledby="`sidenav${index}`"
                        data-bs-parent="#sidenavSecExample">
                        <li v-for="(submenu,index) in data.childs" :key="index" class="relative">
                            <nuxt-link :to="submenu.link"
                                :class="`${$nuxt.$route.name == submenu.routeName ? 'text-blue-600 bg-blue-50' : 'text-gray-500'} flex items-center text-xs py-4 pl-16 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out`">
                                <span>{{ submenu.title }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="bottom-0 absolute w-full">
                <hr class="m-0" />
                <nuxt-link to="/admin/profile"
                    :class="`${$nuxt.$route.name == 'admin/profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-500'} flex items-center text-sm py-4 px-6 h-12 overflow-hidden font-semibold text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out`"
                    data-mdb-ripple="true" data-mdb-ripple-color="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-5 h-5 mr-2">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                            clip-rule="evenodd" />
                    </svg>
                    Profile
                </nuxt-link>
                <button type="button" @click="logout" to="/auth/login"
                    class="flex w-full items-center text-sm font-semibold py-4 px-6 h-12 overflow-hidden text-gray-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-5 h-5 mr-2">
                        <path fill-rule="evenodd"
                            d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
                            clip-rule="evenodd" />
                    </svg>
                    Log Out
                </button>
            </div>
        </div>
        <div class="main-content">
            <!-- Navbar -->
            <header>
                <nav class="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <div class="ml-60">
                            <ul class="flex items-center">
                                <li v-for="(item,index) in $nuxt.$route.name.split('/').filter(item => item != 'admin')"
                                    :key="index" class="flex items-center">
                                    <a href="#"
                                        class="font-semibold text-base text-gray-600 hover:text-primary capitalize">{{
                                        item }}</a>
                                    <span
                                        v-if="index != Object.keys($nuxt.$route.name.split('/').filter(item => item != 'admin')).length - 1"
                                        class="px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="w-5 h-5">
                                            <path fill-rule="evenodd"
                                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="flex items-center lg:order-2 gap-2 -mr-6 dropdown relative" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="grid grid-rows-2 text-right">
                                <span class="text-sm text-gray-500 font-bold capitalize mr-1">{{ user.name }}</span>
                                <span class="text-xs text-gray-500 font-medium capitalize mr-1">{{ user.email }}</span>
                            </div>
                            <div class="dropdown relative">
                                <a class="dropdown-toggle flex items-center hidden-arrow" href="#"
                                    id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img :src="`https://avatars.dicebear.com/api/adventurer-neutral/${user.name}.svg`"
                                        class="rounded-full" style="height: 40px; width: 40px" alt="" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="ml-64 mr-2 mt-5">
                <div class="block p-6 rounded-lg bg-white ">
                    <nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'user',
            'isLoggedIn'
        ])
    },
    middleware: 'auth',
    setup() {
        // const routeName = ref($nuxt.$route.name.split("/"));
        // return {routeName}
    },
    data() {
        return {
            navItems: [
                {
                    title: 'Dashboard',
                    link: '/admin/dashboard',
                    routeName: 'admin/dashboard',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
                            <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                        </svg>`,
                    isNested: false,
                },
                {
                    title: 'User Management',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                        </svg>`,
                    link: '#',
                    isNested: true,
                    childs: [
                        {
                            title: 'User',
                            link: '/admin/user-management/user',
                            routeName: 'admin/user-management/user',
                        },
                        {
                            title: 'Role',
                            link: '/admin/user-management/role',
                            routeName: 'admin/user-management/role',
                        },
                        {
                            title: 'Permission',
                            link: '/admin/user-management/permission',
                            routeName: 'admin/user-management/permission',
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push({ path: '/auth/login' });
            this.$toast.show({
                type: 'success',
                title: 'Success',
                message: 'Berhasil Logout',
                classToast: 'bg-teal-500',
                classTitle: 'text-teal-100',
                classMessage: 'text-teal-200',
                classClose: 'text-teal-300',
                classTimeout: 'bg-teal-800',
            })
        }
    }
};
</script>

<style>

</style>
