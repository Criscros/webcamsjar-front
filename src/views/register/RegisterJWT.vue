<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="clearfix">
    
    <!-- <vs-input
      v-validate="'required|alpha_dash|min:3'"
      data-vv-validate-on="blur"
      label-placeholder="Name"
      name="displayName"
      placeholder="Name"
      v-model="displayName"
      class="w-full" /> -->
      <!-- <vs-select
      class="w-full mt-6"
      label="tipo de cuenta"
      v-model="select_type"
      >
      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
    </vs-select> -->

      <vs-input
      v-validate="'required'"
       name="username"
      @input="queryName('username')"
      type="text"
      label-placeholder="Nick"
      placeholder="Nick"
      v-model="nick"
      class="w-full mt-6" />
    
     <span class="text-danger text-sm">{{ errors.first('username') }}</span>
     <span class="text-danger text-sm" v-if="user_already"> Este usuario ya existe </span>

     <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      @input="queryName('email')"
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
    <span class="text-danger text-sm" v-if="email_already"> Este email ya existe </span>
    
  
    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6"
      />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

     <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox> 
    <vs-button  type="border" to="/login" class="mt-6">Login</vs-button>
    <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">Register</vs-button>
    <!-- <vs-button class="float-right mt-6"  @click="registerUserJWt" >Register</vs-button> -->



  </div>




</template>

<script>


export default {
  data () {
    return {
      displayName: '',
      email: '',
      username :'',
      password: '',
      confirm_password: '',
      user_already : false,
      email_already: false,
      isTermsConditionAccepted: true,
      nick :'',
      select_type: '',


    }
  },
  computed: {
    validateForm () {
      // && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true
      return !this.errors.any()  && this.email !== ''  && this.password != '' && this.confirm_password != ''  && this.nick != '' && this.user_already == false  && this.email_already == false          
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      console.log(this.$store.state.isUserLoggedIn())
      // if (this.$store.state.isUserLoggedIn()) {

      //   // Close animation if passed as payload
      //   // this.$vs.loading.close()

      //   this.$vs.notify({
      //     title: 'Login Attempt',
      //     text: 'You are already logged in!',
      //     iconPack: 'feather',
      //     icon: 'icon-alert-circle',
      //     color: 'warning'
      //   })

      //   return false
      // }
      return true
    },
    registerUserJWt () {
      // If form is not validated or user is already login return
     // if (!this.validateForm || !this.checkLogin()) return

      const payload = {
        userDetails: {
          displayName: this.nick,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password,
          rol: 'watcher',

        },
        notify: this.$vs.notify
      }
      //  console.log('NEW Studio',payload)     
      this.$store.dispatch('auth/registerUserJWT', payload).then((res)=>{
            console.log(res)
      })
    },
    queryName(type){
  
      var nick =  this.nick.toLowerCase(),
      email = this.email.toLowerCase()
      var data = {
         name :  type == 'username' ?  nick : email ,
         type :  type
      }
    
      this.$store.dispatch('auth/searchName', data ).then((res)=>{

          if(res.data.success){         
            if(res.data.type== 'username'){
                this.user_already = true
            }else{
               this.email_already = true
            }
          }else{
            
            if(res.data.type== 'username'){  
                this.user_already = false
            }else{
                this.email_already = false
            }          
          }
          console.log('data user',this.user_already)
      })
    
    }
  }
}
</script>
