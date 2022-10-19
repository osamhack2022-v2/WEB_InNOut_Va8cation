<template>
  <div class="text-center pt-5 pb-4">
    <a href="#">
      <img src="@/assets/images/logo_32_blue.svg" width="64" height="64" alt="">
    </a>
  </div>
  <div class="container-fluid col-8">
    <main>
      <div class="form-header">
        <h4>
          <b>온라인 출타장병현황 IN&OUT</b>
        </h4>
      </div>
      <div class="form mt-4 p-4">
        <form class>
          <div class="form-group">
            <label for="exampleInputEmail1"><b>아이디</b></label>
            <input type="text" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="username">
          </div>
          <div class="form-group">
            <div class="d-flex justify-content-between">
              <label for="exampleInputPassword1"><b>비밀번호</b></label>
              <a href="#!">비밀번호 찾기</a>
            </div>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="password">
          </div>
          <button v-on:click="signIn"><b>로그인</b></button>
        </form>
      </div>
      <div class="callout mt-3 p-4">
        처음이신가요?
        <!--<a href="#!">계정 만들기</a>-->
        <router-link to="/signup">계정 만들기</router-link>
      </div>
    </main>
  </div>

</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: 'signIn',
  data() {
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        // eslint-disable-next-line no-unused-vars
        function(){
          alert('로그인 완료')
        },
        function(err){
          alert('에러 : '+ err.message)
        }
      );
    },
    onClick() {
      alert('클릭됨!' + this.email + this.password)
    }
  }
}
</script>

<style scoped lang="scss">
body {
  height: 100vh;
  margin: 0;
  padding: 0px;
  width: 100%;
}

a {
  text-decoration: none;
}

.callout {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
  text-align: center;
}

.form-header {
  text-align: center;
  // h3 > b {color: $color-secondary-orange;}
}

.form {
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  border-color: $color-border;
}

.form label {
  margin-bottom: 8px;
}

.form input {
  margin-top: 4px;
  margin-bottom: 16px;
}

.btn-primary {
  background-color: $color-primiary-blue;
  border-color: $color-border;
}

.btn-block {
  display: block;
  width: 100%;
}

p {
  display: block;
}
</style>