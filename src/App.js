
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';

import './main.css';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {

  const [data,  setData] = useState([])
  const [loading, setLoading] = useState(true);

  //a side effect hook
  useEffect(function(){
    //make api call here 
    fetchMeCategories();
    // console.table(data)

  }, [])
//a function that makes ajax request to api endpoint
  const fetchMeCategories = ()=>{

      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                  .then(
                      function(response){
                          return response.json()
                      }
                  )
                  .then(function(apiData){

                     setData([...apiData.categories]);
                     setLoading(false);

                  })
                  .catch(function(err){
                      console.log(err)
        })

    }





  return (
    <div>
      <Header/> 
    <main>
      <Banner/>

      {data.length > 0 ?  <Content categories={data}/> : <Loader/>}
      

    </main>
      <Footer/>
    </div>
  ); 
}

export default App;
