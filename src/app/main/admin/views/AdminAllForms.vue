<template>
  <div class="adminTemplateAllForms">
    <admin-header-nav bgColor="#b3b9ce"> </admin-header-nav>
    <admin-side-nav />
    <dashboard-slot>
      <admin-search />
      <div class="allFromsTable">
        <show-data-table :tableData="tableData" :tableHead="tableHead" />
      </div>
    </dashboard-slot>
  </div>
</template>
<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import AdminHeaderNav from '../components/AdminHeaderNav.vue';
import AdminSearch from "../components/adminSearch.vue";
import adminSideNav from "../components/adminSideNav.vue";
import ShowDataTable from "../components/ShowDataTable.vue";
export default {
  components: {
    DashboardSlot,
    adminSideNav,
    AdminSearch,
    ShowDataTable,
    AdminHeaderNav,
  },
  data() {
    return {
      tableData: [
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail1.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail2.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail3.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },

        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail4.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail5.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail6.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail7.com",
          status: "publish",
        },
        {
          title: "Registraion",
          username: "Bernard@gmail8.com",
          status: "publish",
        },
      ],
      tableHead: ["Title", "Username", "statuss"],
    };
  },
};
</script>

<style scoped>
.allFromsTable {
  width: 87%;
  margin: auto;
}
</style>
