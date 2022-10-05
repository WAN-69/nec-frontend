<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="text-center mb-10">
            <nuxt-link to="/">
                <img class="w-20 h-auto mx-auto" src="@/assets/logo/nec.png" alt="logo">
            </nuxt-link>
            <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
            <p>Masukan data untuk login</p>
        </div>
        <div>
            <div class="flex -mx-3">
                <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">Email</label>
                    <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <icons-email className="w-5 h-6 text-gray-400"/>
                        </div>
                        <inputField/>
                    </div>
                </div>
            </div>
            <div class="flex -mx-3">
                <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">Password</label>
                    <div class="flex">
                        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                            <icons-lock className="w-5 h-6 text-gray-400"/>
                        </div>
                        <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                    </div>
                </div>
            </div>
            <div class="block -mx-3">
                <div class="w-full px-3 mb-3">
                    <!-- <Button text="Login"  /> -->
                    <nuxt-link to="/admin/dashboard">
                        <Button text="Login"  />
                    </nuxt-link>
                </div>
                <div class="w-full px-3">
                    <span class="block w-full max-w-xs text-center mx-auto">Atau</span>
                </div>
                <div class="w-full px-3 mt-3">
                    <!-- <Button text="Login"  /> -->
                    <nuxt-link to="register"><Button text="Register"  /></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "auth",
}
</script>

<style>

</style>