<template>
  <div class="adminDashboard">
    <header-slot :bgColor="'#b3b9ce'"> </header-slot>
    <admin-side-nav />
    <dashboard-slot>
      <div class="adminDashboardBlock">
        <h3>DASHBOARD</h3>
        <div class="container-fluid">
          <div class="row">
            <div class="col-4"><show-all-users /></div>
            <div class="col-8">
              <div class="allFormAndPlanData">
                <div class="allFormAndPlanDataRow">
                  <div class="allUnpaidForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                  <div class="allPaidForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
                <div class="allFormAndPlanDataRow">
                  <div class="allSubmitForm allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                  <div class="allPlan allFromStyle">
                    <div class="allUnpainFormTitleNumber">
                      <h4>1034</h4>
                      <p>Unpaid Forms</p>
                    </div>
                    <div class="allUnpainFormImg">
                      <img
                        src="../../../../assets/imgs/folder.png"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="allUserVisitorAndchart">
                <div class="allUserVisitor">
                  <div class="userVisitorRow">
                    <div class="allVerifiedUser">
                      <img src="../../../../assets/imgs/folder.png" alt="" />
                      <h4>Verified User</h4>
                      <p>200</p>
                    </div>
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">
                        <img src="../../../../assets/imgs/folder.png" alt="" />
                        <h4>Verified User</h4>
                        <p>200</p>
                      </div>
                    </div>
                  </div>
                  <div class="userVisitorRow">
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">
                        <img src="../../../../assets/imgs/folder.png" alt="" />
                        <h4>Verified User</h4>
                        <p>200</p>
                      </div>
                    </div>
                    <div class="allVerifiedUser">
                      <div class="allVerifiedUser">
                        <img src="../../../../assets/imgs/folder.png" alt="" />
                        <h4>Verified User</h4>
                        <p>200</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="allUserChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dashboard-slot>
  </div>
</template>

<script>
import DashboardSlot from "../../../slots/DashboardSlot.vue";
import HeaderSlot from "../../../slots/HeaderSlot.vue";
import adminSideNav from "../components/adminSideNav.vue";
import ShowAllUsers from "../components/ShowAllUsers.vue";
export default {
  components: { adminSideNav, HeaderSlot, DashboardSlot, ShowAllUsers },
};
</script>
<style scoped>
.adminDashboardBlock h3 {
  margin-left: 22px;
  padding-top: 19px;
  font-weight: 600;
}
.adminDashboardBlock {
  height: calc(100vh - 80px);
  background: #f2f2f8;
}

.allUnpainFormImg img {
  width: 30px;
  
}
.allFormAndPlanDataRow {
  display: flex;
  gap: 30px;
}

.allFormAndPlanDataRow > div {
  flex: 1;
  background: #fff;
  border-radius: 7px;
  padding: 24px;
  margin-bottom: 30px;
}

.allFromStyle {
  display: flex;
}

.allUnpainFormTitleNumber {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.allUnpainFormTitleNumber h4 {
  font-size: 2rem;
}

.allUnpainFormImg {
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
}

.allUnpainFormTitleNumber p {
  margin-bottom: 0;
  font-size: 1.8rem;
  color: #192a6b;
}
.allFormAndPlanData {
  margin-top: 12px;
  margin-right: 30px;
  margin-left: 20px;
}
.allVerifiedUser img {
    width: 30px;
    margin-bottom: 14px
}
.allUserVisitorAndchart > div {
    flex: 1;
}
.allUserVisitorAndchart {
    display: flex;
}
.userVisitorRow > div {
    flex: 1;
    background: #fff;
    margin-bottom: 19px;
    border-radius: 8px;
    padding: 19px 10px;
}
.userVisitorRow {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 19px;
}
</style>
