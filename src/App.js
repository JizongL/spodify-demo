import './App.css';
import axios from 'axios'
import { useEffect } from 'react'
const URL = 'https://api.spotify.com/v1/artists/1U0sIzpRtDkvu1hXXzxh60/related-artists'
const token = 'Bearer BQBH_WTNAPCmKkIRLBONW7bqwdmIHzQjTlvJgfF650xKEnpbC3vvr-GZ1JyzbBMgUgg9Dkhd2Pd-DfakfHEsYf6TzMt9-QtlgwCrv6hvfEMDVeRPWENQpXR53ymtqlwdxP8FZMRoVJI'

function App() {
  const data = Spodifyfunction()
  return (
    <div className="App">
      
    </div>
  );
}






const Spodifyfunction = async function(URL){
	const response = await axios(
	{
		method:'get',
		url: URL,		
		dataType: 'json',
		headers:{
			'Authorization':token,
			'Content-Type':'json'			
		}
	}
)
const {data:{artists}}=response
return artists
}




export default App;
