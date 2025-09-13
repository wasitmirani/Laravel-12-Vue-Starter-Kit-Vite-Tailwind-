import { ref, onMounted } from 'vue';

export const useGlobal = () => {
  const myData = ref<string>(''); // Example reactive data
  let test = ()=>{
    return "hello world";
  }
  onMounted(() => {
    // Code to execute after component mounts (optional)
    console.log('Component mounted');
  });

  return {
    myData,
    onMounted, // Expose onMounted for custom usage
  };
};