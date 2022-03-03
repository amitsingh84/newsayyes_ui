<template>
  <div class="controllerDashboard">
    <header-nav />
    <div class="controllerDashboardBody">
      <controller-side-nave></controller-side-nave>

      <dashboard-slot>
        <div class="allDataSubject">
          <search-form :id="0" />
        </div>
        <div class="allDataSubjectTable">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">John</th>
                <td>Hany</td>
                <td>johny49@gmail.com</td>
                <td>+49-12345678</td>
                <td class="rightBorder"></td>
              </tr>
              <tr>
                <th scope="row">John</th>
                <td>Hany</td>
                <td>johny49@gmail.com</td>
                <td>+49-12345678</td>
                <td class="rightBorder"></td>
              </tr>
            </tbody>
          </table>
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
import HeaderNav from "../../../shared/components/HeaderNav.vue";
import SearchForm from "../components/SearchForm.vue";
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
.allDataSubjectTable thead th {
  background: #192a6b;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
}
.allDataSubjectTable tbody tr {
  border: 1px solid;
  margin-top: 39px !important;
}
.allDataSubjectTable tbody td,
.allDataSubjectTable tbody th {
  font-size: 1.4rem;
  text-align: center;
}
.allDataSubjectTable {
  padding: 10px 120px;
}
table.table {
  border-collapse: separate;
  border-spacing: 0 24px;
}
.allDataSubjectTable thead {
  height: 48px;
  vertical-align: middle;
}
.allDataSubjectTable tbody td,
.allDataSubjectTable tbody th {
  height: 48px;
  vertical-align: middle;
  border-top: 1px solid var(--secondary-color);
  font-weight: 600;
  color: var(--secondary-color);
}
.allDataSubjectTable tbody th {
  border-left: 1px solid var(--secondary-color);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.rightBorder {
  border-right: 1px solid var(--secondary-color);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
</style>
