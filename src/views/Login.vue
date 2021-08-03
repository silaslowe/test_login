<template>class="flex flex-row gap-4">
    <div>
        <LoginPage />
    </div>
</template>

<script>
import LoginPage from '../components/initial/LoginPage.vue'

export default {
  name: 'Login',
  components: {
      LoginPage      
  },
  setup() {
  }
}
</script>
