<script setup lang="ts">

defineProps<{
  products: Array<{ ProductName: string; TotalQuantity: number }>;
}>();


import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

const columns = [
  { data: 'ProductName' },
  { data: 'Price' },

  { data: 'TotalQuantity' },
];
</script>

<template>
  <div class="container">
    <div class="mr-3 p-3 bold">Product List</div>

    <div v-if="products && products.length>0" >
        <DataTable
          :columns="columns"
          :data="products"
          class="table table-hover table-striped"
          width="100%"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>

              <th>Quantity</th>
            </tr>
          </thead>
          <!-- <tfoot>
            <tr>
              <th>ProductName</th>
              <th>TotalQuantity</th>
            </tr>
          </tfoot> -->
        </DataTable>
    </div>

    <div v-else="products && products.length>0" class="w-full flex text-center justify-center">
                <img src="../../assets/unknown-error.png"/>
        </div>
  </div>
</template>

<style>
@import 'node_modules/bootstrap/dist/css/bootstrap.min.css'; /* Bootstrap styles */
@import 'node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css'; /* DataTables Bootstrap 5 styles */
</style>

