import React, {useContext, useState} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantContext'

const AddRestaurant = () => {
    const { addRestaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await RestaurantFinder.post("/", {
            name,
            location,
            price_range: priceRange,
          });
          console.log(response.data.data);
          addRestaurants(response.data.data.restaurants);
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className='mb-4 p-2'>
      
      <form action="">
        <div className="row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>

          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          
          <div className="col">
          <select 
           className="form-select  "
           value={priceRange}
           onChange={(e) => setPriceRange(e.target.value)}
           >
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
        </select>
      
          </div>

          <div className="col">
          <button
             onClick={handleSubmit}
            type="submit"
            className="btn btn-primary btn "
          >
            Add
          </button>
          </div>
       
        </div>
      </form>
 
  
    </div>
  )
}

export default AddRestaurant