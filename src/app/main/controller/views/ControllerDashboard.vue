<template>
  <div class="controllerDashboard">
    <header-nav />
    <div class="controllerDashboardBody">
      <controller-side-nave></controller-side-nave>
      <dashboard-slot>
        <div class="showControllerData">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">sdfsdf</div>
              <div class="col-md-9">sdfsdfsdfsdf</div>
            </div>
          </div>
        </div>
      </dashboard-slot>
    </div>
  </div>
</template>

<script>
import ControllerSideNave from "../../../shared/components/ControllerSideNave.vue";
import HeaderNav from "../../../shared/components/HeaderNav.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
export default {
  components: {
    ControllerSideNave,
    DashboardSlot,
    HeaderNav,
  },

  data() {
    return {
      seletComp: "controller-dashboard-data",
      showData: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>
