import { reactive } from 'vue'

const login = reactive({
  userName: 'zx',
  password: '88',
  validate: {
    userNameRole: function () {}
  },
  loginAction() {
    console.log(this.password, this.userName)
  }
})

// const loginAction = function () {
//   console.log('')
// }

export { login }
