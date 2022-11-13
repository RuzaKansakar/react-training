import React, { useEffect , useState} from "react";

export default function Weather() {
    const [query,setQuery]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const [data,setData]= useState(null);
    function handleSubmit(event){
        if(event.key === "Enter")
        {
            setLoading(true);
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e167a121565880362a4769a2e4acf518`)
            .then((res) =>{
                if(res.ok){
                    return res.json();
                }
            throw new Error("Some error occured while fetching weather data."); 
            })
            .then((data)=>{
                setLoading(false);
                setError("");
                setData(data);
                console.log(data);
            }).catch(err =>{
                console.log (err);
                setError(err);
                setLoading(false);
            })
        }
        
    }
    if(loading === true){
        return(
            <div> 
                Loading Weather Data..
            </div>
        )
    }
  return (
    <div>
      <h1 className="app-name">
        Weather App<span>🌤</span>
      </h1>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          onChange={(event)=>{ setQuery(event.target.value)}}
          onKeyUp={handleSubmit}
        />
      </div>
       {error && (
        <>
          <br />
          <br />
          <span className="error-message">
            
            <span style={{ "fontSize": "20px" }}> Sorry, City not found.</span>
          </span>
        </>
      )} 
      {
        !error&& (
        <div>
            <div className="city-name">
              <h2>
                {data?.name}, <span>Nepal</span>
              </h2>
            </div>
            <div className="date">
              <span>November 12 2022</span>
            </div>
            <div className="icon-temp">
              <img
                className=""
                src={`http://openweathermap.org/img/wn/10d@2x.png`}
              />
              20
              <sup className="deg">&deg;C</sup>
            </div>
            <div className="des-wind">
              <p>Clear SKy</p>
              <p>Wind Speed: 2.53 m/s</p>
            </div>
          </div>)
      }
      
    </div>
  );
}
//e167a121565880362a4769a2e4acf518