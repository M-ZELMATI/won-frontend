
<script lang="ts">
import axios from 'axios';
import TotalSales from '../components/BoardTable/TotalSales.vue';
import Filter from '../components/BoardTable/Filter.vue';
import ProductQuantity from '../components/BoardTable/ProductsQuantity.vue'
import SalesByCategorie from '../components/BoardTable/SalesByCategorie.vue'
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
export default {
   components: {
   Filter, // Register the Filter component here
   TotalSales,
   SalesByCategorie,
   ProductQuantity
  },
  data() {
    return {
      server: "http://localhost:8080",
      startdate: formattedDate,
      enddate: formattedDate,
      loading: true,
      errorMessage: "",
      TotalSales: 0,
      trandingProduct:null,
      categorySales:null,
      products:null
    };
  },
  methods: {
    async getTotalSales() {
      this.loading = true; 
      this.errorMessage = ''; 
      try {
        const response = await axios.get(
          `${this.server}/analytics/total_sales?start=${this.startdate}&end=${this.enddate}`
        );
        console.log( `${this.server}/analytics/total_sales?start=${this.startdate}&end=${this.enddate}`)
        this.TotalSales = response.data?.TotalSales; 
        console.log(response.data)

        console.log(response.data?.TotalSales)
        } catch (error) {
        this.errorMessage = error.response?.data?.message || 'An error occurred';
        } finally {
          this.loading = false; 
        }
    },
    async getTrandingProduct(){
        try {
        const response = await axios.get(
          `${this.server}/analytics/trending_products?start=${this.startdate}&end=${this.enddate}`
        );
        this.trandingProduct = response.data; // Save the fetched data
        
        console.log(response.data)
        } catch (error) {
        this.errorMessage = error.response?.data?.message || 'An error occurred'; // Handle error
        } finally {
          this.loading = false; // Set loading to false when the request is complete
        }
    },

    async getQuantityByCategorie(){
        try {
        const response = await axios.get(
          `${this.server}/analytics/category_sales?start=${this.startdate}&end=${this.enddate}`
        );
        this.categorySales = response.data; // Save the fetched data
        
        console.log(response.data)
        } catch (error) {
        this.errorMessage = error.response?.data?.message || 'An error occurred'; // Handle error
        } finally {
          this.loading = false; // Set loading to false when the request is complete
        }
    },
    async getproductsBySallesQuantity(){
        try {
        const response = await axios.get(
          `${this.server}/products?start=${this.startdate}&end=${this.enddate}`
        );
        this.products = response.data; // Save the fetched data
        
        } catch (error) {
        this.errorMessage = error.response?.data?.message || 'An error occurred'; // Handle error
        } finally {
          this.loading = false; // Set loading to false when the request is complete
        }
    },
    
    BringFilter(start: Date, end: Date) {
      this.startdate = start;
      this.enddate = end;
      this.getStatistics()

    },
    getStatistics(){
        this.getTotalSales(); 
        this.getTrandingProduct();
        this.getQuantityByCategorie();
        this.getproductsBySallesQuantity();
    }
   
  },
  mounted() {
    this.getStatistics()
  },
};
</script>

<template>

  <div class="h-full m-10">
    
    <Filter @bring-filter="BringFilter" />

    <div class="grid grid-cols-2 grid-rows-1  gap-2 mt-3 mb-3">
        <div class="bx w-full p-3 rounded">
            <TotalSales :trandingProduct="trandingProduct" :TotalSales="TotalSales" />
        </div>

        <div class="bx w-full  text-center justify-center flex p-3 rounded">
            <SalesByCategorie :chartdata="categorySales" />
        </div>
     
    </div>


    <div class=" bx w-full h-full rounded">
        <ProductQuantity :products="products"/>
      </div>
  </div>

</template>

<style>
.m-10 {
  margin: 10px;
}
.non-overflow {
  overflow: hidden;
}
.h-300px{
    height: 300px;
}
</style>
