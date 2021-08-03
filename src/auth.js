import { reactive } from 'vue'

export const state = reactive({
  granted: false,
  user: { email: 'Silas', password: 'Lowe' },
})

export const useAuth = () => {
  const logout = () => {
    state.granted = false
  }
  const getUser = () => {
    return state
  }

  const loginUser = (email, password) => {
      state.granted = true
      state.user.email = email.value
      state.user.password = password.value


  }

  return {
      getUser, logout, loginUser, state
  }
}
