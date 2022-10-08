<template>
    <div>
        <button :type="this.buttonType" v-if="type == 'primary'" :class="'block w-full max-w-xs mx-auto bg-sky-500 hover:bg-sky-700 text-white rounded-lg px-3 py-3 font-semibold'">{{ text }}</button>
        <button :type="this.buttonType" v-else-if="type == 'secondary'" :class="'block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold'">
            {{ text }}
        </button>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            type:String,
        },
        text:String,
        type:{
            type:String,
            default: 'primary'
        },
        buttonType:{
            type:String,
            default:'button'
        },
        isOutline:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>