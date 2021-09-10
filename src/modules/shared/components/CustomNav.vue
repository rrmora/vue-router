<template>
  <a target="_blank" :class="'normal-link'" v-if="isExternalLink" :href="link.to">{{link.name}}</a>

  <router-link v-else :to="route" v-slot="{ isActive }">
      <a :class="isActive ? 'is-active' : 'normal-link'">{{link.name}}</a>
  </router-link>
  <!-- <router-link v-else :to="link.to" v-slot="{ href, isActive }">
      <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{link.name}}</a>
  </router-link> -->
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true,
        }
    },
    computed: {
        isExternalLink() {
            const re = this.link.to.startsWith("https")
            console.log(re)
            return this.link.to.startsWith("https")
        },
        route() {
            return this.link.id === undefined ? { name: this.link.to} : { name: this.link.to, params: {id: this.link.id} }
        }
    }
}
</script>

<style scoped>
    .is-active {
        color: #42b983;
    }
    .normal-link {
        color: #c6c5c5;
    }
</style>