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
            <div>
                <label for="photo">photo:</label>
                <input type="file" id="photo" name="photo" @change="handleFileInput" />
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
        photo: null,
        address:''
    })

    const handleFileInput = (e) => {
        customer.photo = e.target.files[0]
    }

    const createCustomer= ()=>{
        let formData = new FormData();
        formData.append('name', customer.name)
        formData.append('email', customer.email)
        formData.append('phone', customer.phone)
        formData.append('photo', customer.photo)
        formData.append('address', customer.address)

        axios.post(`http://127.0.0.1:8000/api/customer`,formData)
        .then(res=>{
            console.log(res.data)
            router.push('/customer')
        })
        .catch(err=>console.log(err))
    }
</script>

<style lang="scss" scoped>

</style>