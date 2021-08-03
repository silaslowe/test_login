<template>
            <div class="w-full mx-4 mt-12 text-left">
      <h1 class="text-6xl font-semibold leading-snug mb-8">
        Welcome to <span class="font-black">ClickLikeGive</span>
      </h1>
      <h2 class="text-base font-normal mb-4">
        Explains what the site is and a very basic idea of how it works in 4 sentences or less. Just
        put something.
      </h2>
      <!--email password entry-->
      <form @submit.prevent="login">
      <div class="w-full text-left">
        <h3 class="text-base font-semibold text-left">
          Enter your email address to sign in or create an account
        </h3>
        <div class="w-3/4 mt-4">
          <label for="email" class="text-sm">Email address</label>
          <input
            type="text"
            id="email"
            class="w-full px-2 border-solid border-green-400 focus:border-green-400 border-2 rounded-lg bg-green-100 text-black text-xl py-2"
            placeholder="foo@bar.com"
            v-model="email"
          />
        </div>
        <div class="w-3/4 mt-4">
          <label for="password" class="text-sm">Password</label>
          <input
            type="password"
            id="password"
            class="w-full px-2 border-solid border-blue-400 focus:border-blue-400 border-2 rounded-lg text-black text-xl py-2"
            v-model="password"
          />
        </div>
        <div class="w-3/4 mt-4">
          <button type="submit" class="w-full bg-blue-600 rounded-lg text-white text-md h-12 py-2">
            Sign In With Email
          </button>
          <p class="my-4 text-sm text-center">
            By clicking "Sign Up", you agree to our<br /><a
              href="#"
              class="text-blue-300 no-underline hover:text-blue-600 hover:underline"
              >Privacy Policy</a
            >
            and
            <a href="#" class="text-blue-300 no-underline hover:text-blue-600 hover:underline"
              >Terms &amp; Conditions</a
            >
          </p>
        </div>
      </div>
      </form>
      <!-- OAuth -->
      <div class="w-full text-left my-4">
        <div class="w-3/4 mt-2">
          <p class="text-base text-center font-bold my-4">OR</p>
        </div>
        <div class="w-3/4 mt-2">
          <button
            type="submit"
            class="w-full border border-black rounded-full text-base text-black py-2"
            @click="google"
          >
            <span class="flex justify-center">
              <!-- <img src="src/assets/img/google.svg" class="h-6 mr-2" /> -->
              Continue with Google
            </span>
          </button>
        </div>

      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useAuth} from "@/auth"

export default ({
    setup() {
        const {logout, getUser, loginUser, state} = useAuth()
        const email = ref()
        const password = ref()

        console.log(getUser())

        // const granted = toRef(state)

        const login = () => {
          loginUser(email, password)
          console.log(state)
        }
      return {
        login,
        email,
        password,
        logout,
        getUser
      }
        
    },
})
</script>
