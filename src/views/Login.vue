<template>
  <div class="big_box">
    <div class="box">
      <h2>Login</h2>
      <!-- <form> -->
      <div class="inputBox">
        <input type="text"
               name=""
               required=""
               v-model="username" />
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="password"
               name=""
               required=""
               v-model="password" />
        <label>password</label>
      </div>
      <input type="submit"
             name=""
             value="Submit"
             @click="login()" />
      <!-- </form> -->
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // this.$router.push({
      //   path: "/Home",
      // });
      // console.log(this.username, this.password)
      if (this.username === 'fenny' && this.password === '123') {
        this.$router.push({
          path: "/Select",
        });
      } else {
        alert('用户名或者密码错误')
      }

    }
  }
};
</script>
 
<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 40px;
  background: transparent;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: black;
  text-align: center;
}
.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: gray;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  letter-spacing: 1px;
  font-size: 16px;
  color: gray;
  pointer-events: none;
  transition: 0.5s;
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.box input[type='submit'] {
  background: transparent;

  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>