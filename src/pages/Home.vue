<template>
   <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
</template>



<script setup>

import CategoryList from "@/components/CategoryList";
import { storeToRefs } from 'pinia'
import {useCategoriesStore} from "@/stores/CategoriesStore";

const {categories} = storeToRefs(useCategoriesStore());


</script>