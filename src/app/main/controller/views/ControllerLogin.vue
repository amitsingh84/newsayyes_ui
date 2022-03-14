<template>
  <div class="conrollerlogin">
    <header-nav userid="" />
    <div class="container-fluid">
      <div class="row">
        <div
          class="d-flex justify-content-center align-items-center controllerLoginForm"
        >
          <div class="col col-sm-6 col-md-5 col-lg-4">
            <h2 class="text-center">Login</h2>
            <form>
              <div class="mb-3">
                <label for="inputUserName" class="form-label">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputUserName"
                  aria-describedby="userName"
                />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
              <div class="d-flex">
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberCheck"
                  />
                  <label class="form-check-label" for="rememberCheck"
                    >Remember Me</label
                  >
                </div>
                <div class="d-flex justify-content-end flex-grow-1">
                  <a href="#">Froget Password</a>
                </div>
              </div>
              <div class="d-flex gap-4">
                <a href="#" class="solidBtn text-center" style="width: 100%">
                  Login</a
                >

                <a href="#" class="lineBtn text-center" style="width: 100%"
                  >Register</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../../../shared/components/HeaderNav.vue";
export default {
  components: { HeaderNav },
};
</script>
<style scoped>
.controllerLoginForm {
  height: calc(100vh - 87px);
}
h2 {
  font-family: var(--font-family-roboto-slab);
  font-weight: 900;
  font-size: 1.7rem;
}
a.registerBtn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
}
a.registerBtn:hover {
  color: #fff !important;
}
</style>
