<template>
    <div>
        <h3>Products Page</h3>
        <div class="row g-3">
            <div class="col-3" v-for="product in products" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from './ProductCard.vue';
import axios from 'axios';

let products = ref([])
// console.log(products)
const fetchProduct = () => {
    axios.get(`https://dummyjson.com/products`)
    .then(res=>{
        // console.log(res.data.products)
        products.value = res.data.products
    })
    .catch(err=> console.log(err))
}

onMounted(()=>fetchProduct())
</script>

<style lang="scss" scoped>

</style>