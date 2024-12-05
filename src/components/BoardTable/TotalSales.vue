<script setup lang="ts">
defineProps<{
    TotalSales: any;
    trandingProduct: any
}>();

</script>

<template>
  <div class="p-3 border rounded m-3 bg-gray-100" ><strong class="mr-3">Total Sales:</strong> {{ TotalSales?TotalSales:0 }}</div>
        <div v-if="trandingProduct && trandingProduct.length>0">
            <div class="mr-3 p-3 bold">Trending products</div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-2">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-2">
                            Total Quantity
                        </th>
                        <th scope="col" class="px-6 py-2">
                            Total Sell
                        </th>
                    </tr>
                </thead>
                <tbody v-for="item in trandingProduct" :key="item.id">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-2">{{ item.ProductName }}</td> 
                        <td class="px-6 py-2">{{ item.TotalQuantity }}</td> 
                        <td class="px-6 py-2">{{ item.Total }}</td> 
                    </tr>
                </tbody>

            </table>
          
        </div>
        <div v-else="trandingProduct && trandingProduct.length" class="w-full flex text-center justify-center">
                <img src="../../assets/unknown-error.png"/>
        </div>
</template>

<style scoped>
.h-500px{
    height: 100px;
}
.w-300px{
    width: 300px;
}
</style>
