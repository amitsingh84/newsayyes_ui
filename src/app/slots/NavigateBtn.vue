<template>
    <div class="navigateBtn">
        <slot></slot>
    </div>
</template>





<style scoped>
.navigateBtn{
     border: 2px solid var(--primary-color);
     height: 40px; 
    border-radius: 7px;
}
.navigateBtn:hover{
     border-color:var(--primary-color);
    background-color: var(--primary-color);

}
</style>