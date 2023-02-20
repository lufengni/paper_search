<template>
  <div>
    <div class="box">
      <h2>Login</h2>
      <!-- <form> -->
      <div class="inputBox">
        <input type="text" name="" required="" v-model="username" />
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="password" name="" required="" v-model="password" />
        <label>password</label>
      </div>
      <input type="submit" name="" value="登录" @click="login()" />
      <!-- </form> -->
    </div>
    <div class="dount_box"  v-if="flage">
      <div class="donut"></div>
      <span class="text">登录中...</span>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      flage: false
    }
  },
  methods: {
    login() {
      debugger;
      // this.$router.push({
      //   path: "/Home",
      // });
      // console.log(this.username, this.password)
      this.flage = true
      setTimeout(() => {
        this.flage = false

        if (this.username === 'fenny' && this.password === '123') {

          this.$router.push({
            path: "/Home",
          });
        } else {
          alert('用户名或者密码错误')
        }
      }, 2000)


    }
  }
};
</script>
 
<style scoped>
@-webkit-keyframes rotation {

  0% {

    transform: rotate(0deg);

  }

  100% {

    transform: rotate(360deg);

  }

}

.dount_box {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  margin-top: 10px;
}

.donut {
  width: 48px;

  height: 48px;
  border: 3px solid #FFF;

  border-radius: 50%;

  display: inline-block;

  position: relative;

  -webkit-animation: rotation 1s linear infinite;

  animation: rotation 1s linear infinite;

}

.donut:after {

  content: "";

  position: absolute;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);

  width: 56px;

  height: 56px;

  border-radius: 50%;

  border: 3px solid transparent;

  border-bottom-color: #FF3D00;

}

.big_box {
  /* width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.75); */
}

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

.box .inputBox input:focus~label,
.box .inputBox input:valid~label {
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