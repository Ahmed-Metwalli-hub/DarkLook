import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { allProducts, spcificCategory } from "./ProductJson";
export const ApiContext = createContext();
export const ApiContextProvider = ({children}) => {
  const [allData, setAllData] = useState([]);
  const [allCatigories, setAllCatigories] = useState([]);
  const [sort, setSort] = useState(null);
  let url = "https://dummyjson.com/products";
  async function getAllData() {
    let { data } = await axios.get(url);
    setAllData(allProducts.concat(data.products));
  }
  async function getAllCategories() {
    let { data } = await axios.get(`${url}/categories`);
    setAllCatigories(data);
  }
  async function ApiProductCategory(catUrl) {
    let { data } = await axios.get(catUrl);
    setAllData(data.products);
  }
  
  function NormalProductCategory(index){
    let newArr = spcificCategory[index].products;
    setAllData(newArr);
  };

  function changeSorting(e){
    let value = e.target.value;
    switch (value) {
      case "Name(A-Z)":
        allData.sort((a,b)=>{
          return a.title > b.title ? 1 : -1
        });
          setSort("Name(A-Z)");
          setAllData([...allData]);
        break;
      case "Name(Z-A)":
        allData.sort((a,b)=>{
          return a.title < b.title ? 1 : -1
        });
          setSort("Name(Z-A)");
          setAllData([...allData]);
        break;
      case "Price(Low - High)":
        allData.sort((a,b)=>{
          return a.price - b.price
        });
          setSort("Price(Low - High)");
          setAllData([...allData]);
        break;
      case "Price(High - Low)":
        allData.sort((a,b)=>{
          return b.price - a.price 
        });
          setSort("Price(High - Low)");
          setAllData([...allData]);
        break;
      default:
        setSort("Defult");
        getAllData();
    }   
  }
  
  useEffect(() => {
    getAllData();
    getAllCategories();
  }, []);
  

  return (
    <ApiContext.Provider value={{sort  , getAllData , changeSorting , allData, allCatigories , NormalProductCategory , ApiProductCategory}}>
      {children}
    </ApiContext.Provider>
  )
}
