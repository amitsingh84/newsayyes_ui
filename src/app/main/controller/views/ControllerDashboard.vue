<template>
  <div class="controllerDashboard">
    <header-slot>
      <div class="row">
        <div class="col-6">
          <p class="logo" style="color: #fff">YesOrNo</p>
        </div>
        <div class="col-6">
          <div class="imageAvatar text-right">
            <img
              @click="showSetting"
              src="../../../../assets/imgs/person.png"
              alt=""
            />
            <div v-if="showData" class="showSettingStyle">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-3">
                    <img src="../../../../assets/imgs/person.png" alt="" />
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
    <div class="controllerDashboardBody">
      <controller-side-nave></controller-side-nave>

      <dashboard-slot> </dashboard-slot>
    </div>
  </div>
</template>

<script>
// import LeftSide from "../../../slots/LeftSide.vue";
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import ControllerSideNave from "../../../shared/components/ControllerSideNave.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
export default {
  components: {
    HeaderSlot,
    // LeftSide,
    ControllerSideNave,
    DashboardSlot,
  },

  data() {
    return {
      seletComp: "controller-dashboard-data",
      showData: false,
    };
  },
  methods: {
    setComponet(comp) {
      this.seletComp = comp;
      console.log("click", comp);
    },
    showSetting() {
      this.showData = !this.showData;
    },
  },
};
</script>
<style scoped>

</style>
