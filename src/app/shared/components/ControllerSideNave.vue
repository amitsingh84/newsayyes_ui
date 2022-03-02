<template>
    <div class="controllerSideNav">
        <div> <font-awesome-icon icon="fa-solid fa-circle-user" /><router-link to="/controller/dashboard" >Dashboard</router-link></div>
           <div> <router-link to="/controller/alldatasubject">Data Subjects</router-link></div>
           <div> <router-link to="/controller/allforms">Froms</router-link></div>
           <div> <router-link to="/controller/createform">Add New Form</router-link></div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.controllerSideNav{
    background-color: var(--primary-color); 
    height: 100vh;
    position: fixed;
    left: 0;
    top: 80px; 
    width: 10rem;
}
.controllerSideNav .router-link-active {
    color: #fff;
}
</style>