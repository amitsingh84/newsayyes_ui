<template>
  <div class="controllerDashboard">
    <header-nav/>
    <div class="controllerDashboardBody">
      <controller-side-nave></controller-side-nave>

      <dashboard-slot> 
        <div class="allDataSubject">
          <search-form />
        </div>
      </dashboard-slot>
    </div>
  </div>
</template>

<script>
// import LeftSide from "../../../slots/LeftSide.vue";
// import HeaderSlot from "../../../slots/HeaderSlot.vue";
import ControllerSideNave from "../../../shared/components/ControllerSideNave.vue";
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import HeaderNav from '../../../shared/components/HeaderNav.vue';
import SearchForm from '../components/SearchForm.vue';
export default {
  components: {
    // HeaderSlot,
    // LeftSide,
    ControllerSideNave,
    DashboardSlot,
    HeaderNav,
    SearchForm,
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
