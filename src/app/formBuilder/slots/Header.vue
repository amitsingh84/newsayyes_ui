<template>
  <div class="Header_conatiner">
    <div class="container-fluid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.Header_conatiner {
  background-color: #192a6b;
  height: 70px;
  display: flex;
  align-items: center;
  color: #fff;
}
.Header_conatiner a {
  color: #fff;
}
</style>