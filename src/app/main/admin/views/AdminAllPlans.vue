<template>
    <div class="adminAllPlansBlock">
         <header-slot :bgColor="'#b3b9ce'"> </header-slot>
    <admin-side-nav />
    <dashboard-slot>
      <admin-search title="Subscriptions Plans"/>
       <div class="allFromsTable">
       <admin-table :tables="tableData" :tablesHead="tableHead"/>
        
 
      </div>
    </dashboard-slot>
    </div>
</template>

<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import AdminSearch from "../components/adminSearch.vue";
import adminSideNav from "../components/adminSideNav.vue";
import AdminTable from '../components/AdminTable.vue';
export default {
    components: { DashboardSlot, HeaderSlot, adminSideNav, AdminSearch, AdminTable },
      data() {
    return { 
      countOfPage: 7,
      currPage: 1,
      tableData: [
        {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },
          {
          planName: "Registraion",
          plnaDuration: "Bernard@gmail.com",
          planPrice: "publish",
          planLimit:1234546789,
          monthlySubmission:'Controller',
          availableSpace:'Controller',
          monthlyformview:'Controller',
          status:'Controller',

        },

      ],
      tableHead:[
        'Plan Name','Plan Duration','Plan Price','Plan Limit','Monthly Submission','Available Space','Monthly Form View','Status'
      ]
      
    };
  },
  computed: {
    pageStart() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage() {
      return Math.ceil(this.tableData.length / this.countOfPage);
    },
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
    selectData(event) {
      this.countOfPage = event.target.value;
    },
  },
}
</script>

<style scoped>
.allFromsTable {
    width: 84%;
    margin: auto;
}
.allFromsTable table{
    width: 100%;
}

.allFromsTable thead th {
    font-size: 1.4rem;
}
.allFromsTable thead th {
    font-size: 1.6rem;
    background: #192a6b;
    color: #fff;
    padding: 10px;
    border: 1px solid var(--tertiary-color);

}
.allFromsTable tbody td {
    padding: 10px;
    font-size: 1.5rem;
    color: #192a6b;
    font-weight: 500;
    border: 1px solid var(--tertiary-color);
}
.allFromsTable {
    margin-top: 30px;
    max-height: calc(100vh - 186px);
    overflow: scroll;
}
.allFromsTable .pagination li a {
    color: var(--primary-color);
    border: none;
}
::-webkit-scrollbar {
    /* display: none; */
}
.allFromsTable thead {
    position: sticky;
    top: 0;
}
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}
.allFromsTable .pagination {
    margin-top: 10px;
}
.allFromsTable .pagination li {
    border: 1px solid var(--primary-color);
}
.selectAndPagination > div {
    flex: .4;
}
.selectAndPagination > nav{
flex: 1;
}
.selectAndPagination {
    display: flex;
    margin-top: 12px;
}
.allFromsTable td img {
    width: 12px;
    margin-right: 15px;
}
</style>