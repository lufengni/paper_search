<template>
    <div class="root">
        <div class="selectFile">
            <div class="title">文件上传</div>
            <div class="content">
                <input type="file" ref="clearFile" @change="getFile($event)" class="input">
                <!-- <button v-if="flage" class="btn" @click="cancle()">取消选择</button> -->
                <button @click="submitAddFile" class="btn">开始上传</button>
            </div>

        </div>
    </div>

</template>
 
<script>
export default {
    data() {
        return {
            file: '',
            flage: false
        }
    },
    methods: {
        getFile(event) {
            this.file = event.target.files;
            // for (var i = 0; i < file.length; i++) {
            //     //    上传类型判断
            //     var imgName = file[i].name;
            //     var idx = imgName.lastIndexOf(".");
            //     if (idx != -1) {
            //         var ext = imgName.substr(idx + 1).toUpperCase();
            //         ext = ext.toLowerCase();
            //         if (ext != 'pdf' && ext != 'doc' && ext != 'docx') {

            //         } else {
            //             this.addArr.push(file[i]);
            //         }
            //     } else {

            //     }
            // }
        },
        submitAddFile() {
            if (!this.file) alert("请选择要上传的文件")

            var formData = new FormData();
            formData.append('num', this.addType);
            formData.append('linkId', this.addId);
            formData.append('rfilename', this.addFileName);
            for (var i = 0; i < this.addArr.length; i++) {
                formData.append('fileUpload', this.addArr[i]);
            }
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': this.token
                }
            };
            this.axios.post(apidate.uploadEnclosure, formData, config)
                .then((response) => {
                    if (response.data.info == "success") {
                        this.$message({
                            type: 'success',
                            message: '附件上传成功!'
                        });
                    }
                })
        },
        cancle() {

        }

    }
}
</script>

<style scoped>
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
 
 