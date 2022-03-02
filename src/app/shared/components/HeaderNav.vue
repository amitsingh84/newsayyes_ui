<template>
  <header-slot>
    <div class="row">
      <div class="col-6">
        <p class="logo" style="color: #fff">YesOrNo</p>
      </div>
      <div class="col-6">
        <div class="imageAvatar text-right">
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
  </header-slot>
</template>

<script>
import HeaderSlot from "../../slots/HeaderSlot.vue";
export default {
  components: {
    HeaderSlot,
  },
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