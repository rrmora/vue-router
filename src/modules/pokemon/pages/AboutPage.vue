<template>
    <div>
        <h2>About Page</h2>
        <hr>
        <h4>{{name}}</h4>
        <button @click="onChangeName">cambiar nombre</button>
    </div>
</template>

<script>

export default {

    data() {
        return {
            name: 'Raul'
        }
    },   
    methods: {
        onChangeName() {
            this.name = 'Nombre cambiados'
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    }
}
</script>