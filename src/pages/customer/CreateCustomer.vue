<template>
    <div>
        <h2>Create Customer Page</h2>
        <!-- {{ customer }} -->
        <form @submit.prevent="createCustomer">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" v-model="customer.name" />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="customer.email" />
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" v-model="customer.phone" />
            </div>
            <div>
                <label for="address">address:</label>
                <input type="text" id="address" name="address" v-model="customer.address" />
            </div>
            <button type="submit">Create Customer</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter()

    const customer = reactive({
        name:'',
        email:'',
        phone:'',
        address:''
    })

    const createCustomer= ()=>{
        axios.post(`http://127.0.0.1:8000/api/customer`,customer)
        .then(res=>{
            console.log(res.data)
            router.push('/customer')
        })
        .catch(err=>console.log(err))
    }
</script>

<style lang="scss" scoped>

</style>