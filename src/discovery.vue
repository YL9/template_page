<template>
    <div>
        <h2>{{msg}}</h2>
        <el-steps :space="100" :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      msg: "我是发现模块"
    };
  },
  methods: {
    next: function() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>