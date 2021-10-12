<template>
  <v-container>
      <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="emailErrors"
      label="Password"
      type="password"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    
    

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    
  </form>
  {{tasks}}
  </v-container>
</template>

<script >
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {vxm} from "../store/store.vuex"
  @Component({
    
  })
  export default class extends Vue{

    name=""
    password=""
    tasks=[]
  
    submit (){
      //   const res = fetch(`http://localhost:5000/users`)
      //   const data =  res.json()
      //   this.users=data
      //   this.users.forEach((item)=>{
      //     if(item.name===this.name && this.password===item.password){
      //       alert("exists")
      //     }
      //     else{
      //       alert("not exists")
      //     }
      //   })
      // },
     fetch('http://localhost:5000/users')
     .then(res=>res.json())
     .then((item)=>{
       if(item.some(data => data.name===this.name && data.password==this.password)){
         alert('exists')
         this.$router.push(this.$route.query.redirect || '/about')
       }
       else{
         alert('does not exist')
       }
     })
     
      
      }

     
  }
</script>
