import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Customer from "../pages/customer/Customer.vue";
import CreateCustomer from "../pages/customer/CreateCustomer.vue";
import EditeCustomer from "../pages/customer/EditeCustomer.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/customer', component: Customer},
    {path: '/customer/create', component: CreateCustomer},
    {path: '/customer/edit/:id', component: EditeCustomer},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})