import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Loader from "../Loader/Loader"
import ItemList from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        
        try{
          const response = await fetch ("./productos.json")
          const data = await response.json()
          setProductos(data)
        }catch(error){
          console.log("Error al obtener los productos", error)
        }

      } 

      fetchData()

    }, [])


  return (
    <div className={`${styles.Itemliscontainer}`}>

        <h2 className="contentContainerTitle">{greeting}</h2>


        {productos.length == 0 ? 

          <Loader/>

          :

          <ItemList productos={productos}/>

        }

    </div>
  )
}

export default ItemListContainer
