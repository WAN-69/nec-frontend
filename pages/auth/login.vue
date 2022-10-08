<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="text-center mb-10">
            <nuxt-link to="/">
                <img class="w-20 h-auto mx-auto" src="@/assets/logo/nec.png" alt="logo">
            </nuxt-link>
            <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
            <p>Masukan data untuk login</p>
        </div>
        <ValidationObserver>
            <form @submit.prevent="login">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class="flex justify-between gap-2">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <span class="text-rose-400 font-medium">{{ errors[0] }}</span>
                            </div>
                            <div class="flex">
                                <div
                                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <icons-email className="w-5 h-6 text-gray-400" />
                                </div>
                                <input v-model="form.email"
                                    :class="`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500 ${ errors[0] ? 'focus:border-rose-500' : 'focus:border-green-500'}`"
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
                <div class="flex justify-between">
                    <nuxt-link to="register" class="py-2 px-4 shadow-md no-underline rounded-full bg-orange-200/40 text-yellow-600 font-sans font-semibold text-sm focus:outline-none active:shadow-none mr-2 cursor-pointer">Register</nuxt-link>
                    <button type="submit" class="py-2 px-4 shadow-md no-underline rounded-full bg-blue-200/40 text-sky-600 font-sans font-semibold text-sm focus:outline-none active:shadow-none mr-2 cursor-pointer">Login</button>


                    <!-- <div class="w-full px-3 mb-3">
                        <Button :disabled="invalid" buttonType="submit" text="Login" />
                    </div>
                    <div class="w-full px-3">
                        <span class="block w-full max-w-xs text-center mx-auto">Atau</span>
                    </div>
                    <div class="w-full px-3 mt-3">
                        <nuxt-link to="register"><Button text="Register" /></nuxt-link>
                    </div> -->
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>

export default {
    layout: "auth",
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: null,
            submitStatus: null
        }
    },
    mounted() {

    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith('local', { data: this.form })
                    .then(() => this.$toast.show({
                        type: 'success',
                        title: 'Success',
                        message: 'Login Berhasil',
                    }))
            } catch (error) {
                this.errors = error.response.status;
                console.log(this.errors)
                this.$toast.show({
                    type: 'danger',
                    title: 'Error',
                    message: this.errors == 401 ? 'Data yang kamu kirimkan tidak cocok dengan database kita,mohon dicek ulang' : 'Mohon lengkapi username & password',
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