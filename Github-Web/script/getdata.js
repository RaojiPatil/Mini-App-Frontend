//get datails of any particluar user

async function getData(user) {
 
    try{

   let response = await fetch(`https://api.github.com/users/${user}`)
    let data = await response.json()

    return data
  } catch (error) {
      console.log("error", error);
  }

}

export default getData