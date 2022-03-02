<template>
  <div class="controllerDashSearch">
    <div class="controllerSearchRow">
      <div>
        <a href="#" class="solidBtn">Back</a>
      </div>
      <div class="userDetails"><p>User Details</p></div>
      <div class="searchOptions"><span
          ><img src="../../../../assets/imgs/search.png" alt="search" />
          <input
            type="search"
            name="controllerSearch"
            id="controllerSearch"
            placeholder="Search in My Froms"
        /></span></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.controllerSearchRow {
  display: flex;
  padding: 8px 17px 8px 10px;
}
.controllerSearchRow > div {
    flex: 1;
}

.controllerSearchRow input {
  height: 33px;
  padding-left: 45px;
  border-radius: 7px;
  border: 1px solid #a0a5c5bd;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
}

.controllerDashSearch {
  border-bottom: 2px solid #a0a5c5;
}
.controllerSearchRow img {
  position: absolute;
  width: 16px;
  top: -4px;
  left: 19px;
}
.controllerSearchRow span {
  position: relative;
}
.userDetails p {
    text-align: center;
}
.searchOptions { 
    margin-left: auto;
    text-align: right;
}
</style>
