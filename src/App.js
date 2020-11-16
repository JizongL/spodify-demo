import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
const URL = 'https://api.spotify.com/v1/artists/1U0sIzpRtDkvu1hXXzxh60/related-artists'
const token = 'Bearer BQDu3aAptmW9NbZucxQ9ghYuqm3-rCl_LFZRLUFhbwP5sWGJKOHStUQ1yhxC75kBTSmIS-VOtdGxNBEXRSYhcGXByJef2bpYZSe-egEgdw83q23uFhJPoxQEN9wyWJ3O-iegTSYa0ayjqkd6H7SIBhMf'

function App() {
	const [data,setData]= useState([])
	useEffect(async () => {
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
			setData(response.data.artists)
	  },[]);
	  console.log(data,'test data')
	  const finalData = data.reduce((accum,{name,genres,external_urls,followers,popularity,images})=> {
	
		if(!accum[name]){
			accum[name]={genres,external_urls,followers,popularity,images}
			return accum
		}
		
	  },{})

console.log(finalData,'finaldata')
const finalList = Object.keys(finalData).map((name,index)=>{
	console.log(name,'name')
	let {images}=finalData[name]
	let {external_urls:{spotify}}=finalData[name]
	return <li className="artist-list-item" key={index}>
		<div className="artist-name"><a className="external-link" href={spotify}>{name}</a></div>
		<div className="artist-portrait-container">
		<img className="artist-portrait" src={images[2]['url']}/>
		</div>
	</li>
})

return (
	<div className="App">
		<ul className="artist-list">
			{finalList}
		</ul>
	</div>
);
}


export default App;
