<template>
  <div class="controllerAllFrom">
    <header-nav />
    <controller-side-nave />
    <dashboard-slot>
      <div class="controllerFormsblock">
        <div class="controllerForm">dfsdf</div>
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import ControllerSideNave from "../../../shared/components/ControllerSideNave.vue";
import HeaderNav from "../../../shared/components/HeaderNav.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
export default {
  components: { HeaderNav, ControllerSideNave, DashboardSlot },
};
</script>
<style scoped>
</style>