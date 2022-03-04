<template>
  <div class="adminSideNav">
    <div class="adminSideNavUrl">
       <div class="adminImage">
           <div class="adminPicture">
               <img src="../../../../assets/imgs/user.png" alt="">
           </div>
           <h4>Nicko Bender</h4>
       </div>
       <div class="adminUrlLink">
           <div class="">
        <router-link to="/admin/dashboard"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Dashboard</router-link
        >
      </div>
      <div class="">
        <router-link to="/admin/dashboar"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Forms</router-link
        >
        <div class="">
        <router-link to="/admin/dashboar"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Users</router-link
        >
      </div>
      <div class="">
        <router-link to="/admin/dashboar"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Plans</router-link
        >
      </div>
      <div class="">
        <router-link to="/admin/dashboar"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Act as a Controller</router-link
        >
      </div>
      <div class="">
        <router-link to="/admin/dashboar"
          ><img src="../../../../assets/imgs/dashboard.png" />
          Help</router-link
        >
      </div>
      </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.adminSideNav {
 background-color: var(--primary-color);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    width: 21rem;
    z-index: 9999;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
}
.adminSideNav .router-link-active {
  color: #fff;
}

.adminSideNav a {
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #a9a9cf;
  font-size: 1.6rem;
}
 .adminImage {
    padding-bottom: 19px; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.384);
    margin: 0 auto;
    margin-bottom: 19px;
    width: 80%;
}

 .adminUrlLink a.router-link-exact-active {
    color: #192a6b !important;
    background: #fff;
    position: relative;
}
    .adminUrlLink a img {
      filter: brightness(100);
    }
.adminUrlLink a.router-link-exact-active img {
  filter: unset;
}
.adminSideNavUrl img {
  margin-right: 15px;
  width: 17px;
}
.adminPicture  {
    text-align: center;
    margin-top: 19px;
}
.adminSideNav .adminPicture img {
    width: 48px ;
}
.adminSideNav h4{
    color: #fff;
    text-align: center;
    margin-top: 14px;
    font-weight: 400;
}
.adminUrlLink a {
    padding: 10px 7px 10px 23px;
    font-size: 1.5rem;
}
.adminUrlLink a.router-link-exact-active:after {
    content: '';
    position: absolute;
    right: 0;
    width: 3px;
    height: 100%;
    background: #192a6b;
}
</style>
