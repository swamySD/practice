export const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    
    
      return response.json();
    } catch (error) {
        console.log(error)
     return error
    }
  };