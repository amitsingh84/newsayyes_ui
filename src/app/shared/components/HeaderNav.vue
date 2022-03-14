<template>
  <div class="top_header_style">
<div>

    <div class="row">
      <div class="col-4">
        <p class="logo" style="color: #fff">YesOrNo</p>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <div v-if="controllerName" ><h4 class="text-white" style="font-size:1.9rem">{{controllerName}}</h4></div>
      </div>
      <div class="col-4">
        <div class="imageAvatar text-right" v-if="userid">
          <img
            @click="showSetting"
            src="../../../assets/imgs/person.png"
            alt=""
          />
          <div v-if="showData" class="showSettingStyle">
            <div class="container-fluid">
              <div class="row">
                <div class="col-3">
                  <img src="../../../assets/imgs/person.png" alt="" />
                </div>
                <div class="col-9"><p>Hello, franklin</p></div>
              </div>
              <div class="bottomSetting">
                <p>Account Setting</p>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  </div>
</template>

<script>
export default {
  components: {
  },
  props:['userid', 'controllerName'],
  data() {
    return {
      showData: false,
    };
  },
  methods: {
    showSetting() {
      this.showData = !this.showData;
    },
  },
};
</script>

<style scoped>
.top_header_style {
  background-color: #192a6b;
  min-height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
    top: 0;
    z-index: 9999;
}
.top_header_style > div{
  width: 97%;
  margin: auto;
}
.top_header_style a {
  color: #fff;
}

</style>