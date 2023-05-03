let data = {
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: 
{
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
}


const newData = {
    ...data,
    name: "Abubakar Adeni",
    email: "abubakaradeni1@gmail.com",
    hobby: ['Menonton Film', 'Kuliner', 'Berenang']
  }
  
  console.log(newData);
  
 
  const { address: { street, city } } = newData;
  
  console.log(street);
  console.log(city);
  

