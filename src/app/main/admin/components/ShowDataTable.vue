<template>
  <div class="showAllDataTable">
     <!-- <div class="table-responsive"> -->
    <table id="alldata" class="display " >
      <thead>
        <tr>
          <th><input type="checkbox" name="check" id="checkAll" /></th>
          <th v-for="(tabhead, i) in tableHead" :key="i">{{ tabhead }}</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in tableData" :key="index">
          <td><input type="checkbox" name="checkData" id="allDataCheck" /></td>
          <td v-for="(t, i) in Object.values(data)" :key="i">{{ t }}</td>
          <td class="tableAction">
            <a href="#"
              ><img src="../../../../assets/imgs/admin/pencil.png" alt="" /></a
            ><a href="#"
              ><img src="../../../../assets/imgs/admin/pencil.png" alt=""
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
     <!-- </div> -->
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-bs5/js/dataTables.bootstrap5.min";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
export default {
  components: {},
  data() {
    return {
      //   tableData: [
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail1.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail2.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail3.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail4.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail5.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail6.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail7.com",
      //       status: "publish",
      //     },
      //     {
      //       title: "Registraion",
      //       username: "Bernard@gmail8.com",
      //       status: "publish",
      //     },
      //   ],
      //   tableHead:[
      //     'Title','Username','statuss'
      //   ]
    };
  },
  props: ["tableData", "tableHead"],
  mounted() {
    $("#alldata").DataTable({
        "scrollY":"45vh",
        // "scrollX": true,
        // scrollCollapse: true,
        lengthMenu: [[6, 20, 30, -1], [6, 20, 30, "All"]],
        // responsive: true
         
        
  
    });
    // $('#alldata thead').on( 'click', 'tr','th#checkAll', function () {
    //     console.log('selected',this);
    //     $('#allDataCheck').toggleClass('selected');
    // } );
  },
};
</script>

<style scoped>
td.tableAction img {
    width: 13px;
    margin-right: 12px;
}
table.dataTable thead th {
   font-size: 1.5rem;
    font-weight: 400;
}
table#alldata td {
    font-size: 1.5rem;
}


.showAllDataTable {
    margin-top: 24px;
}
 

.dataTables_scrollBody::-webkit-scrollbar {
    /* display: none; */
}
table.display.dataTable.no-footer thead th {
    background-color: #192a6b;
    color: #fff;
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}
table.display.dataTable.no-footer tbody td{
    background-color: #fff;
    border-right: 1px solid var(--border-color);
    /* border-bottom: 1px solid var(--border-color); */
}
table{
    border-left: 1px solid var(--border-color);
    /* overflow-x: scroll; */
   
}
tbody td {
        padding: 10px 10px;
        border-bottom: 1px solid gray;
        /* min-width: 140px !important; */
        height: 18px;

    }
    thead th {
        padding: 10px 10px;
        border-bottom: 1px solid gray;
        min-width: 140px ;
        line-height: 17px;
        width: 100%;
    }
    thead th:first-child,tbody td:first-child{
      min-width: 10px !important;
      max-width: 30px !important;

    }
    thead th:last-child,tbody td:last-child{
      min-width: 10px !important;
       
    }
 ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  
  /* Handle */
 ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }
</style>
