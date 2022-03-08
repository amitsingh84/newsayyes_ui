<template>
  <div class="adminTemplateAllForms">
    <header-slot :bgColor="'#b3b9ce'"> </header-slot>
    <admin-side-nav />
    <dashboard-slot>
      <admin-search />
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
      
      tableData: [
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
      tableHead:[
        'Title','Username','statuss'
      ]
    };
  },
  // computed: {
  //   pageStart() {
  //     return (this.currPage - 1) * this.countOfPage;
  //   },
  //   totalPage() {
  //     return Math.ceil(this.tableData.length / this.countOfPage);
  //   },
  // },
  // methods: {
  //   setPage(idx) {
  //     if (idx <= 0 || idx > this.totalPage) {
  //       return;
  //     }
  //     this.currPage = idx;
  //   },
  //   selectData(event) {
  //     this.countOfPage = event.target.value;
  //   },
  // },
};
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
    overflow-y: scroll;
}
.allFromsTable .pagination li a {
    color: var(--primary-color);
    border: none;
}
::-webkit-scrollbar {
    display: none;
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