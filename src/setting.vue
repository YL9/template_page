<template>
    <div class="block">
        <h3>{{msg}}</h3>
        <el-rate
                v-model="value2"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                :allow-half="true">
        </el-rate>
        <span>{{value2}}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value2: null,
      msg: "我是设置模块"
    };
  }
};
</script>