<template>
  <div>
    <hello-row>
      <hello-button>默认按钮</hello-button>
      <hello-button type="primary">主要按钮</hello-button>
      <hello-button type="success">成功按钮</hello-button>
      <hello-button type="info">信息按钮</hello-button>
      <hello-button type="warning">警告按钮</hello-button>
      <hello-button type="danger">危险按钮</hello-button>
    </hello-row>

    <hello-row>
      <hello-button icon="el-icon-search" circle></hello-button>
      <hello-button type="primary" icon="el-icon-edit" circle></hello-button>
      <hello-button type="success" icon="el-icon-check" circle></hello-button>
      <hello-button type="info" icon="el-icon-message" circle></hello-button>
      <hello-button type="warning" icon="el-icon-star-off" circle></hello-button>
      <hello-button type="danger" icon="el-icon-delete" circle></hello-button>
    </hello-row>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {},
  mounted() {},
};
</script>

