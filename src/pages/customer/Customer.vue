<template>
    <div>
        <h2> Customer Page </h2>
        <input type="text" placeholder="Search..." v-model="searchTerm" />
        <table >
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in searchCustomer" :key="customer.id">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.address }}</td>
                    <td>
                        <router-link :to="`/customer/edit/${customer.id}`" >Edit</router-link>
                        <button @click="deleteCustomer(customer.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

    const baseurl = import.meta.env.VITE_API_BASE_URL;
    const customers = ref([])
    let searchTerm = ref('');

    const searchCustomer = computed(()=>{
        let q = searchTerm.value.toLowerCase();
        if (!q) {
            return customers.value;
        }
        return customers.value.filter((customer)=>{
            return customer.name.toLowerCase().includes(q) || customer.email.toLowerCase().includes(q) || customer.phone.toLowerCase().includes(q)
        })
    })

    const fetchCustomer = async () => {
        axios.get(`${baseurl}/customer`)
            .then(response => {
                console.log(response);
                
                customers.value = response.data;
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
    };

    const deleteCustomer = (id) =>{
        axios.delete(`${baseurl}/customer/${id}`)
        .then(res=>{
            console.log(res.data)
            fetchCustomer()
        })
        .catch(error=>console.error(error))
    }

    onMounted(() => {
        fetchCustomer();
    });
</script>

<style scoped>

</style>