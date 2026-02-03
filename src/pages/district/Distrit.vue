<template>
    <div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="division" class="form-label">Division</label>
                <select class="form-select" id="division" name="division" v-model="division_id">
                    <option value="">Select Division</option>
                    <option v-for="division in divisions" :key="division.id" :value="division.id">{{ division.name }}
                    </option>
                </select>
            </div>
            <div class="col-md-6 mb-3">
                <label for="city" class="form-label">District</label>
                <select class="form-select" id="city" name="city">
                    <option value="">Select City</option>
                    <option v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';

const divisions = ref([])
const division_id = ref('')
const districts = ref([])

const fetchDivision = () => {
    axios.get(`http://127.0.0.1:8000/api/division`)
        .then(res => divisions.value = res.data)
        .catch(err => console.log(err))
}

const fetchDistricts = (id) => {
    axios.get(`http://127.0.0.1:8000/api/district/${id}`)
        .then(res => districts.value = res.data)
        .catch(err => console.log(err))
}

watch(division_id, (newVal, oldVal)=> {
    // console.log('Division changed:', oldVal, '→', newVal)
    fetchDistricts(newVal)
})

onMounted(() => fetchDivision())

</script>

<style lang="scss" scoped></style>