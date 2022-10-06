<template>
    <div>
        <!-- component -->
        <div class="flex flex-col">
            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">574 Messages</h2>
                        <p class="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
                    </div>
                </div>
                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">1823 Users</h2>
                        <p class="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
                    </div>
                </div>
                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">548 Posts</h2>
                        <p class="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
                    </div>
                </div>
                <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>

                    <div class="ml-4">
                        <h2 class="font-semibold">129 Comments</h2>
                        <p class="mt-2 text-sm text-gray-500">Last commented</p>
                    </div>
                </div>
            </div>
            <section class="antialiased mt-10">
                <div class="grid grid-cols-2 gap-4">
                    <!-- Table -->
                    <div class="w-full max-w-2xl bg-white shadow-lg rounded-xl border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Customers</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Spent</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Country</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                            width="40" height="40" alt="Alex Shatov"></div>
                                                    <div class="font-medium text-gray-800">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,890.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                                            width="40" height="40" alt="Philip Harbach"></div>
                                                    <div class="font-medium text-gray-800">Philip Harbach</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">philip.h@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,767.04</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                                            width="40" height="40" alt="Mirko Fisuk"></div>
                                                    <div class="font-medium text-gray-800">Mirko Fisuk</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">mirkofisuk@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,996.00</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                                            width="40" height="40" alt="Olga Semklo"></div>
                                                    <div class="font-medium text-gray-800">Olga Semklo</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">olga.s@cool.design</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$1,220.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                            width="40" height="40" alt="Burak Long"></div>
                                                    <div class="font-medium text-gray-800">Burak Long</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">longburak@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$1,890.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="w-full max-w-2xl bg-white shadow-lg rounded-xl border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Customers</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Email</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Spent</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-center">Country</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                            width="40" height="40" alt="Alex Shatov"></div>
                                                    <div class="font-medium text-gray-800">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,890.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                                            width="40" height="40" alt="Philip Harbach"></div>
                                                    <div class="font-medium text-gray-800">Philip Harbach</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">philip.h@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,767.04</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                                            width="40" height="40" alt="Mirko Fisuk"></div>
                                                    <div class="font-medium text-gray-800">Mirko Fisuk</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">mirkofisuk@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$2,996.00</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                                            width="40" height="40" alt="Olga Semklo"></div>
                                                    <div class="font-medium text-gray-800">Olga Semklo</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">olga.s@cool.design</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$1,220.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                            class="rounded-full"
                                                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                            width="40" height="40" alt="Burak Long"></div>
                                                    <div class="font-medium text-gray-800">Burak Long</div>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left">longburak@gmail.com</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$1,890.66</div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-center">??</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: "admin",
};
</script>

<style>

</style>
