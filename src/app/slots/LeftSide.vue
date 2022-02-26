<template>
    <div class="left_side_block">
        <slot></slot>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
.left_side_block{
     background-color: var(--primary-color); 
    height: calc(100vh - 70px);
}
</style>