const callAPI = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      console.log("todos:", response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  
  callAPI();