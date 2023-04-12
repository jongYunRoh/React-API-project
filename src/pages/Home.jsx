import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import { Link } from 'react-router-dom';
export default function Home(props) {
    const {data,isDark} = props;
    const [searchdata, setSearchData] =useState('');
    const [name, setName] = useState('');

    const filteredData = data.filter(item =>
        item.name.common.toLowerCase().includes(searchdata.toLowerCase())
      );
    console.log(data);
  return (
    <>
    <Title/>
    <div className='container'>
       <input type="text" value={name} onChange={e => setName(e.target.value)}/>
       <button onClick={()=>setSearchData(name)}>Search</button>
        <ul className='countries'>
            {filteredData.map((item, i) => (
                 <li className='item' key={i}>
                    <Link to={`/detail/${i}`}>
                    <img src={item.flags.svg} />
                    </Link>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>
                 </li>
            ))}
        </ul>
    </div>
    </>
  )
}