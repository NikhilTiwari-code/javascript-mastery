// extracting data from an api response

const apiResponse = {
    status: "success",
    data: {
      users: [
        { id: 1, name: "Eva" },
        { id: 2, name: "Frank" },
      ],
    },
  };  


  const  {data: {users: [firstUser],},}    = apiResponse;
  const  {data: {users: [,secondUser],},}    = apiResponse;
  const  {data: {users},}    = apiResponse;
  //console.log(firstUser);
  //console.log (secondUser)
// console.log(users);

// for (const element of users) {
//     console.log(element);
    
//     console.log(`name is ${element.name} and id is ${element.id}`);
    
    
// }


const {
    data: {
      users: [ { name: firstUserName }, { name: secondUserName } ],
    },
  } = apiResponse;
  
  console.log(firstUserName); // "Eva"
  console.log(secondUserName); // "Frank"
   
