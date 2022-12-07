<template>
    <div class="content">
        <button @click="inputMessage()">论文信息录入</button>
        <button>论文信息搜索</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        inputMessage() {
            this.$router.push({
                path: "/Input",
            });
        }

    }
}
</script>

<style scoped>
.content {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 40px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: transparent; */
    /* box-sizing: border-box; */
    /* box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5); */
    /* border-radius: 10px; */
}

button {
    width: 300px;
    height: 50px;
    background-color: #3fa9db;
    color: #fff;
    border-style: none;
    font-size: 18px;
    margin-bottom: 50px;
}
</style>