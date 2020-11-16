import './App.css';





function App() {
  return (
    <div className="App">
      
    </div>
  );
}


axios = require('axios')
let data 
const URL = 'https://api.spotify.com/v1/artists/1U0sIzpRtDkvu1hXXzxh60/related-artists'

const token = 'Bearer BQCOF0AbdE9PQJnW03nCSRlf29CVgAhcANlghb8i9177x2Znitd__EJGI_usrVz_YHzMZNCd3mEMF0KT6pKRdLpILwwiB34kklgpQ6peTa5DKnntuyP5prh0y1w9iiPYyXZMhueIwYg'

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
	console.log(response)
}


Spodifyfunction()

export default App;
