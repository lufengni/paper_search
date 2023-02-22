<template>
  <div class="root">
    <div class="selectFile">
      <div class="title">文件上传</div>
      <div class="content">
        <input type="file"
               ref="clearFile"
               @change="getFile($event)"
               class="input">
        <!-- <button v-if="flage" class="btn" @click="cancle()">取消选择</button> -->
        <button @click="submitAddFile"
                class="btn">开始上传</button>
      </div>

    </div>
    <div class="dount_box"
         v-if="flage">
      <div class="donut"></div>
      <span class="text">上传中...</span>
    </div>
  </div>

</template>
 
<script>
export default {
  data () {
    return {
      file: '',
      flage: false,
      addArr: []
    }
  },
  methods: {
    getFile (event) {
      this.file = event.target.files;
      console.log(this.file)
      for (var i = 0; i < this.file.length; i++) {
        //    上传类型判断
        var imgName = this.file[i].name;
        var idx = imgName.lastIndexOf(".");
        if (idx != -1) {
          var ext = imgName.substr(idx + 1).toUpperCase();
          ext = ext.toLowerCase();
          this.addArr.push(this.file[i]);
        } else {

        }
      }
    },
    submitAddFile () {
      // this.flage = true
      if (!this.file) alert("请选择要上传的文件")

      var formData = new FormData();
      for (var i = 0; i < this.addArr.length; i++) {
        formData.append('file', this.addArr[i]);
      }
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': this.token
        }
      };
      this.$axios.post('http://localhost:8200/paper/import/data', formData, config)
        .then((response) => {
          if (response.data.info == "success") {
            // this.flage = false
            console.log('上传成功')
            // alert('上传成功')
            this.$message({
              type: 'success',
              message: '附件上传成功!'
            });
          }
        })
    },
    cancle () {

    }

  }
}
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
  color: #fff;
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
  border: 3px solid #fff;

  border-radius: 50%;

  display: inline-block;

  position: relative;

  -webkit-animation: rotation 1s linear infinite;

  animation: rotation 1s linear infinite;
}

.donut:after {
  content: '';

  position: absolute;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);

  width: 56px;

  height: 56px;

  border-radius: 50%;

  border: 3px solid transparent;

  border-bottom-color: #ff3d00;
}
.root {
  width: 100vw;
  height: 100vh;
  background-color: #f4f3ef;
}
.selectFile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
  background-color: #fff;
}
.title {
  text-align: left;
  margin-left: 30px;
  margin-top: 30px;
  border-bottom: 1px solid gray;
}
.content {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 150px;
}
.input {
  margin-left: 180px;
}
.btn {
  margin-left: 180px;
  margin-top: 50px;
  width: 150px;
}
</style>
 
 