<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="">
            <nuxt-link to="login">
                <icons-back />
            </nuxt-link>
        </div>
        <div class="text-center mb-10">
            <img class="w-20 h-auto mx-auto" src="@/assets/logo/nec.png" alt="logo">
            <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
            <p>Masukan data untuk registrasi</p>
        </div>
        <validationObserver>
            <ValidationProvider name="Nama" rules="required|min:3">
                <div class="flex -mx-3">
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Nama Depan</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <icons-user className="w-5 h-6 text-gray-400" />
                            </div>
                            <input v-model="form.nama_depan" type="text"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Ahmad">
                        </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Nama Belakang</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <icons-user className="w-5 h-6 text-gray-400" />
                            </div>
                            <input v-model="form.nama_belakang" type="text"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Kanabawi">
                        </div>
                    </div>
                </div>
            </ValidationProvider>
            <ValidationProvider>
                <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Email</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <icons-email className="w-5 h-6 text-gray-400" />
                            </div>
                            <input v-model="form.email" type="email"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="ahmad_kanabawi@mail.com">
                        </div>
                    </div>
                </div>
            </ValidationProvider>
            <ValidationProvider name="Password" rules="required|min:6" v-slot="{ errors }">
                <div class="flex -mx-3">
                    <div class="w-full px-3 mb-12">
                        <div class="flex justify-between gap-2">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <span class="text-rose-400 font-medium">{{ errors[0] }}</span>
                        </div>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                <icons-lock className="w-5 h-6 text-gray-400" />
                            </div>
                            <input v-model="form.password" type="password"
                                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="************">
                        </div>
                    </div>
                </div>
            </ValidationProvider>
            <div class="flex justify-end">
                <button @click="register" type="button" class="py-2 px-4 shadow-md no-underline rounded-full bg-blue-200/40 text-sky-600 font-sans font-semibold text-sm focus:outline-none active:shadow-none mr-2 cursor-pointer">Submit</button>
            </div>
        </validationObserver>
    </div>
</template>

<script>
export default {
    layout: "auth",
    data() {
        return {
            form: {
                nama_depan: null,
                nama_belakang: null,
                email: null,
                password: null
            }
        }
    },
    methods: {
        async register() {
            try {
                await this.$axios.post('register', {
                    name: this.form.nama_depan +' '+ this.form.nama_belakang,
                    email: this.form.email,
                    password: this.form.password
                }).then(() => this.$router.push('login'))
            } catch (error) {
                this.errors = error.response.status;
                console.log(this.errors)
                this.$toast.show({
                    type: 'danger',
                    title: 'Error',
                    message: this.errors,
                    classToast: 'bg-rose-200',
                    classTitle: 'text-red-800',
                    classMessage: 'text-red-700',
                    classClose: 'text-rose-300',
                    classTimeout: 'bg-rose-600',
                })
            }
        }
    }
}
</script>

<style>

</style>