<template>
    <div class="loginBtn">
        <button type="submit">
        <slot></slot>
        </button>
    </div>
</template>

<style scoped>
.loginBtn{
    height: 40px;
    background-color: var(--primary-color);
    border-radius: 7px;
    border:2px solid var(--primary-color);
   
}

.loginBtn:hover{
    border-color:var(--primary-color);
    background: transparent;
    
}
.loginBtn:hover button{
    color: var(--primary-color);
}
button{
    background: transparent;
    border: 0;
    width: 100%;
    color: #fff;
     font-weight: 500;
     height: 100%;
}

</style>