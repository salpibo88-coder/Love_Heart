const data = [
  { id: 1, name: "Dara", gender: "male", email: "dara1@gmail.com" },
  { id: 2, name: "Sokha", gender: "female", email: "sokha2@gmail.com" },
  { id: 3, name: "Chan", gender: "male", email: "chan3@gmail.com" },
  { id: 4, name: "Maly", gender: "female", email: "maly4@gmail.com" },
  { id: 5, name: "Vanna", gender: "male", email: "vanna5@gmail.com" },
  { id: 6, name: "Srey", gender: "female", email: "srey6@gmail.com" },
  { id: 7, name: "Rithy", gender: "male", email: "rithy7@gmail.com" },
  { id: 8, name: "Lisa", gender: "female", email: "lisa8@gmail.com" },
  { id: 9, name: "Bora", gender: "male", email: "bora9@gmail.com" },
  { id: 10, name: "Neary", gender: "female", email: "neary10@gmail.com" },
  { id: 11, name: "Sophea", gender: "female", email: "sophea11@gmail.com" }
];
data.map(function(value, index){
  console.log('------', index+1, '-----')
  console.log(value.id);
  console.log(value.name);
  console.log(value.gender);
  console.log(value.email);
})