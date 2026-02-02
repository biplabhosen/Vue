<template>
    <div>
        <h2>Edit Customer</h2>
        <!-- {{ customer }} -->
        <form @submit.prevent="updateCustomer">
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
            <button type="submit">Update Customer</button>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const baseurl = import.meta.env.VITE_API_BASE_URL;
    let customerId = useRoute().params.id;
    let customer = ref({})
    const router = useRouter()

    const fetchCustomer = () =>{
        axios.get(`${baseurl}/customer/${customerId}`)
        .then(res=>customer.value = res.data)
        .catch(err=>console.log(err))
    }

    onMounted(()=>{
        fetchCustomer()
    })

    const updateCustomer =  () => {
        axios.put(`${baseurl}/customer/${customerId}`, customer.value)
        .then(res=>{    
            console.log(res.data)
            router.push('/customer')
        })
        .catch(err=>console.log(err))
    }
</script>

<style scoped>

</style>