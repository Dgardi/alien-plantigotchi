

  //Create New Plant 

  const createPlant = (plantData) => {
    return fetch('api/plants/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(plantData),  
    });
  };



// Update Plant

const updatePlant = (plantData) => {
    return fetch('api/plants/' + plantData.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(plantData),  
    });
  };
  
// Delete Plant 
  const deletePlant = (plantData) => {
    return fetch('api/plants/' + plantData.id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(plantData),  
    });
  };

module.exports = { updatePlant };