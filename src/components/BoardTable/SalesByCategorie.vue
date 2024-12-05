
<template>
   <div class="m-3 bold ">
        Products sales by Categories
    </div>
      <Responsive class="w-full h-full"  v-if="chartdata && chartdata.length>0">
        <template #main="{ width }">
          <Chart
            direction="circular"
            :size="{ width, height: 400 }"
            :data="data"
            :margin="{
              left: 0,
              top: 20,
              right: 0,
              bottom: 20
            }"
            :config="{ controlHover: false }"
          >
            <template #layers>
              <Pie
                :dataKeys="['name', 'pl']"
                :pie-style="{ innerRadius: 100, padAngle: 0.05 }"
                :label="{
                  formatter: (value, name) => `${name}: ${value}%`
                }"
              />
            </template>
            <template #widgets>
              <Tooltip
                :config="{
                  name: {},
                  avg: { hide: true },
                  pl: { label: 'value' },
                  inc: { hide: true },
                  Percentage: { label: 'Percentage' }  
                }"
                hideLine
              />
            </template>
          </Chart>
        </template>
      </Responsive>
    <div v-else="chartdata && chartdata.length>0" class="w-full flex text-center justify-center">
      <img src="../../assets/unknown-error.png"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts';
  
  // Define the props
  const props = defineProps<{
    chartdata?: Array<{
      Category: string;
      TotalQuantity: string;
      Percentage: number;
    }>;
  }>();
  
  const defaultData = [
    { Category: "Default", TotalQuantity: "0", Percentage: 0 },
  ];
  
  const transformedData = computed(() => {
    const inputData = props.chartdata ?? defaultData;
  
    return inputData.map(item => ({
        name: item.Category,
        pl: parseFloat(item.TotalQuantity).toFixed(2),
        avg: (parseFloat(item.TotalQuantity)/2).toFixed(2),
        inc: (parseFloat(item.TotalQuantity)*0.1).toFixed(2),
        Percentage: parseFloat(item.Percentage).toFixed(2)+"%",
   
    }));
  });
  const data = computed(() => transformedData.value);
  </script>
  
  <style>
  .w-full {
    width: 100%;
  }
  
  .axis {
    display: none !important;
  }
  </style>
  