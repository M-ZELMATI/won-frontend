<script>
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];
export default {
  props: {
  },
  data() {
    return {
      formData: {
        start: formattedDate,
        end: formattedDate,
      }

    };
  },
  emits: ['bring-filter'],
  methods: {
    SendFilterData() {
      console.log('Form Submitted:', this.formData);
      this.$emit('bring-filter', this.formData.start,this.formData.end);
    },
  },
};
</script>

<template>
  <form @submit.prevent="SendFilterData">
    <div class="flex">
      <div class="m-2">
        <label for="default-datepicker" class="text-sm font-medium text-gray-900 dark:text-white mr-3">
          Start Date
        </label>
        <input
          type="date"
          v-model="formData.start"
          class="w-full m-3 flex tag-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Start Date"
          
          required
        />
      </div>
      <div class="m-2">
        <label for="default-datepicker" class="text-sm font-medium text-gray-900 dark:text-white mr-3">
          End Date
        </label>
        <input
          type="date"
          v-model="formData.end"
          class="w-full m-3 flex tag-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="End Date"
          required
        />
      </div>
      <div class="m-5">
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Filter
        </button>
      </div>
    </div>
  </form>
</template>

<style>

</style>
