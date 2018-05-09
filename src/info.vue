<template>
<div>
    <h3>{{msg}}</h3>
    <div>
        <el-alert
                title="成功提示的文案"
                type="success">
        </el-alert>
        <el-alert
                title="消息提示的文案"
                type="info">
        </el-alert>
        <el-alert
                title="警告提示的文案"
                type="warning">
        </el-alert>
        <el-alert
                title="错误提示的文案"
                type="error">
        </el-alert>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是信息模块"
    };
  }
};
</script>