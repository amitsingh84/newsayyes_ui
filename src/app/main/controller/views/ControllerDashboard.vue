<template>
  <div class="controllerDashboard">
    <header-slot> </header-slot>
    <div class="controllerDashboardBody">
      <div class="row g-0">
        <div class="col-md-3">
          <left-side>
            <div
              style="color: #fff"
              @click="setComponet('controller-dashboard-data')"
            >
              Dashboard
            </div>
            <div
              style="color: #fff"
              @click="setComponet('controller-datasubject')"
            >
            Data Subject
            </div>
          </left-side>
        </div>
        <div class="col-md-9">
          <component :is="seletComp"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "../../../slots/LeftSide.vue";
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import ControllerDashboardData from "../views/ControllerDashboardData.vue";
import ControllerDatasubject from "../views/ControllerDatasubject.vue";
export default {
  components: {
    HeaderSlot,
    LeftSide,
    ControllerDashboardData,
    ControllerDatasubject,
  },

  data() {
    return {
      seletComp: "controller-dashboard-data",
    };
  },
  methods: {
    setComponet(comp) {
      this.seletComp = comp;
      console.log("click", comp);
    },
  },
};
</script>
<style scoped></style>
