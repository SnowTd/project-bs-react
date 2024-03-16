import { useEffect, useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import Hcontent from './components/headcontent'
import Product from './components/product'
import Card from './components/card'
import DataContext from './data/dataConText'
import content from './components/content'
import Content from './components/content'
import Cart from './components/cart'
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Joint from './components/jointshop'
import Jointshop from './components/cardforjoint'
import Foot from './components/footer'
import Collection from './components/Collection'
import AboutUs from './components/aboutus'
import Contact from './components/contact'

function App() {


  
  const colorProduct = [
    {id:0,header:'CUSTOM COLOR',title: 'Product1',content: 'Content',price:19.99,detail: 'detail',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg',},
    {id:1,header:'CUSTOM COLOR',title: 'Product2',content: 'Content',price:10.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
    {id:2,header:'CUSTOM COLOR',title: 'Product3',content: 'Content',price:12.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
  ]
  const clockFaceProduct = [
    {id:0,header:'CUSTOM CLOCKFACE',title: 'Product',content: 'Content',price:19.99,detail: 'detail',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg',},
    {id:1,header:'CUSTOM CLOCKFACE',title: 'Product',content: 'Content',price:10.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
    {id:2,header:'CUSTOM CLOCKFACE',title: 'Product',content: 'Content',price:12.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
  ]
  const materialProduct = [
    {id:0,header:'CUSTOM MATERIAL',title: 'Product',content: 'Content',price:19.99,detail: 'detail',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg',},
    {id:1,header:'CUSTOM MATERIAL',title: 'Product',content: 'Content',price:10.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
    {id:2,header:'CUSTOM MATERIAL',title: 'Product',content: 'Content',price:12.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
  ]
  const clockHandProduct = [
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Product',content: 'Content',price:19.99,detail: 'detail',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg',},
    {id:1,header:'CUSTOM CLOCKHAND',title: 'Product',content: 'Content',price:10.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
    {id:2,header:'CUSTOM CLOCKHAND',title: 'Product',content: 'Content',price:12.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock,-photo-number-1.jpg'},
  ]
  const NumberProduct = [
    {id:0,header:'CUSTOM NUMBER',title: 'Product',content: 'Content',price:19.99,detail: 'detail',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg',},
    {id:1,header:'CUSTOM NUMBER',title: 'Product',content: 'Content',price:10.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
    {id:2,header:'CUSTOM NUMBER',title: 'Product',content: 'Content',price:12.99,detail: 'detail ',img:'https://st2.depositphotos.com/1011969/6070/i/450/depositphotos_60704945-stock-photo-number-1.jpg'},
  ]


  const allProduct = [{name:colorProduct,header:colorProduct[0].header},{name:clockFaceProduct,header:clockFaceProduct[0].header},{name:materialProduct,header:materialProduct[0].header},{name:clockHandProduct,header:clockHandProduct[0].header},{name:NumberProduct,header:NumberProduct[0].header}]
  const [totalPrice,setTotalPrice] = useState(0) 
  const [priceColor,setPriceColor] = useState(0)
  const [priceFace,setPriceFace] = useState(0)
  const [priceMaterial,setPriceMaterial] = useState(0)
  const [priceHand,setPriceHand] = useState(0)
  const [priceNumber,setPriceNumber] = useState(0)
  const [checkedandValue, setCheckedValue] = useState(0)
  const [imgId, setImgId] = useState(0)
  const [img,setImg] = useState("")
  const [productColor,setProductColor] = useState("")
  const [productFace,setProductFace] = useState("")
  const [productMaterial,setProductMaterial] = useState("")
  const [productHand,setProductHand] = useState("")
  const [productNumber,setProductNumber] = useState("")
  const [pricetColor,setPricetColor] = useState(0)
  const [pricetFace,setPricetFace] = useState(0)
  const [pricetMaterial,setPricetMaterial] = useState(0)
  const [pricetHand,setPricetHand] = useState(0)
  const [pricetNumber,setPricetNumber] = useState(0)
  const [cartProduct,setCartProduct] = useState([])
  const [cartProductP,setCartProductP] = useState([])
  const [cartProductAll,setCartProductAll] = useState([])


  const handleRadioChange = (e) => {
    setImg(e.img)
    if (e.target.name === colorProduct[0].header) {
      setProductColor(e.target.title)
      setPricetColor(e.target.value)
      setPriceColor(e.target.value)
      

    } else if (e.target.name === clockFaceProduct[0].header) {
      setProductFace(e.target.title)
      setPricetFace(e.target.value)
      setPriceFace(e.target.value)
      
    } else if (e.target.name === materialProduct[0].header) {
      setProductMaterial(e.target.title)
      setPricetMaterial(e.target.value)
      setPriceMaterial(e.target.value)
      
    } else if (e.target.name === clockHandProduct[0].header) {
      setProductHand(e.target.title)
      setPricetHand(e.target.value)
      setPriceHand(e.target.value)
      
    } else if (e.target.name === NumberProduct[0].header) {
      setProductNumber(e.target.title)
      setPricetNumber(e.target.value)
      setPriceNumber(e.target.value)
      
    }

}
  useEffect(()=> {
    const sum = +priceColor + +priceFace + +priceMaterial+ +priceHand + +priceNumber
    const img_Id = colorProduct.indexOf((e) => e.id === imgId)
    const setimage = colorProduct[imgId].img
    const cartConfirm =[productColor,productFace,productHand,productMaterial,productNumber]
    const cartConfirmP =[pricetColor,pricetFace,pricetHand,pricetMaterial,pricetNumber]
    setCartProductP(cartConfirmP)
    setCartProduct(cartConfirm)
    const objectProduct = [
      {name:productColor,price:pricetColor},
      {name:productFace,price:pricetFace},
      {name:productHand,price:pricetHand},
      {name:productMaterial,price:pricetMaterial},
      {name:productNumber,price:pricetNumber},
    ]
    setCartProductAll(objectProduct)
    setTotalPrice(sum.toFixed(2))
  },[checkedandValue,priceColor,priceFace,priceMaterial,priceHand,priceNumber])
  
  return (
    <DataContext.Provider value={{tt:totalPrice,oc:handleRadioChange}}>
      <div className=' transition ease-in'>
        <Nav/>
          <ScrollToTop/>
          <Routes>
              <Route path='/' element={<><Hcontent/><Content/><Collection/><AboutUs/></>}/> 
              <Route path='/product' element={<> <Product Card={Card} allProduct={allProduct} image={img}/> </>}/>
              <Route path='/product/confirm' element={<><Cart cart={cartProductAll} /></>}/>
              <Route path='/joint' element={<><Joint Card={Jointshop}/></>}/>
              <Route path='/contact' element={<><Contact/>  </>}/>
          </Routes>
        
      <Foot/>
      </div>
    </DataContext.Provider>
  )
}

export default App
