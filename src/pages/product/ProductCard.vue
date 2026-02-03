<template>
    <div>
        <div class="card" style="width: 18rem; height: 28rem;">
            <img :src="props.product.thumbnail" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{props.product.title}}</h5>
                <p class="card-text ">{{props.product.title}}</p>
                <p class="card-text m-0"><strong>{{props.product.price}}</strong></p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    </div>
</template>

<script setup>

    let props = defineProps(['product'])
    // console.log(props)
</script>

<style lang="scss" scoped></style>