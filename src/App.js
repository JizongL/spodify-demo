import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
const URL = 'https://api.spotify.com/v1/artists/1U0sIzpRtDkvu1hXXzxh60/related-artists'
const token = 'Bearer BQC3bsJjkOYO1VbKgMsjWuIgi9hEj4VjyujNBAvrC59g3IbQ_KyouKCVOYOQIDtl8zz5ufjIJrJKtNvLxOdu6-FEZlYfBNoKols7c1Y9Tacjc1MjGSbYk1fabL682rdVJlQydR9IvqHSqHIyZd5dylEH'

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
		<div className="artist-name">
			<a className="external-link" href={spotify}>{name}</a>
		</div>
		<div className="artist-portrait-container">
			<img className="artist-portrait" src={images[2]['url']}/>
		</div>
	</li>
})

return (
	<div className="App">
		<div className="image-container"></div>
		<ul className="artist-list">
			<li><h1>Kelela – Related Artists</h1></li>
			{finalList}
		</ul>
		<p>Image credit: Renell Medrano</p>
	</div>
);
}

export default App;
