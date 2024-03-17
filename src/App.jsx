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
import ProductShop from './components/productshop'
import CardProduct from './components/cardforproductshop'

function App() {


  
  const colorProduct = [
    {id:0,header:'CUSTOM COLOR',title: 'Product1',content: 'Content',price:19.99,detail: 'detail',img:'https://media.discordapp.net/attachments/1152548462727020626/1218569034321367060/S__2277433_0.png?ex=660823d9&is=65f5aed9&hm=fedcb3858fcbb09ca635e35b6e51cfde05d64dd3e3dd718ae62219c58951677d&=&format=webp&quality=lossless&width=359&height=508',},
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

  const genaralJoint = [
    {id:0,name:'Power of Prayer',price:"2,390",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__4.jpeg"},
    {id:0,name:'Any Engraving Here',price:"2,390",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__5.jpeg"},
    {id:0,name:'Any words',price:"2,390",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__9.jpeg"},
    {id:0,name:'Audio Tape',price:"2,500",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__17.jpeg"},
    {id:0,name:'Let\'s to travel',price:"2,550",img:"https://img2.pic.in.th/pic/LINE_ALBUM_Ppp__13.jpeg"},
    {id:0,name:'My High Heel',price:"2,490",img:"https://img2.pic.in.th/pic/LINE_ALBUM_Ppp__1.jpeg"},
  ]
  const festivalJoint = [
    {id:0,name:'Hands Holi',price:"3,390",img:"https://img2.pic.in.th/pic/62038B25-DA3B-4172-9BD8-9CF332151127bc84495597874f1b.png"},
    {id:0,name:'Holi India 2024',price:"3,350",img:"https://img2.pic.in.th/pic/43FCE164-EF0B-468A-BE93-43E8038817FA.png"},
    {id:0,name:'Edinburgh mask ',price:"3,290",img:"https://img5.pic.in.th/file/secure-sv1/F06F9F7D-78C7-4E5C-AD97-F7AF849DFE31.png"},
    {id:0,name:'Scotland Palace',price:"3,490",img:"https://img5.pic.in.th/file/secure-sv1/D0D5AA52-9567-4D92-A960-F13C457286333ab8017b095e677e.png"},
    {id:0,name:'Gion Festival 2024',price:"3,450",img:"https://img5.pic.in.th/file/secure-sv1/0E166CA6-BF6C-4F4C-A084-135D027D262A.png"},
    {id:0,name:'Gion Matsuri ',price:"3,490",img:"https://img5.pic.in.th/file/secure-sv1/25A09D7E-357B-434E-A855-FF804ED2F0C8.png"},
    {id:0,name:'Mardi gras 2024',price:"3,390",img:"https://img2.pic.in.th/pic/C737B9EE-AB5C-44A9-8776-02A293B63FCB.png"},
    {id:0,name:'Mardi gras hat',price:"3,350",img:"https://img5.pic.in.th/file/secure-sv1/2EDE80B0-FB00-4BA2-8E72-748194A34AF4.png"},
    {id:0,name:'Power of Dragon',price:"3,500",img:"https://img2.pic.in.th/pic/7D135503-0AB6-44C0-9660-8369AFA6F940.png"},
    {id:0,name:'Guitar of Dead',price:"3,290",img:"https://img5.pic.in.th/file/secure-sv1/85944849-0488-43A2-A7D4-0042A4B9B09F498845df780ccb01.png"},
    {id:0,name:'Peace',price:"3,450",img:"https://img5.pic.in.th/file/secure-sv1/74DB7BED-82F8-4982-BD0D-687F32A60B9Ce8642cea4adae6b1.png"},
  ]

  const countryJoint = [
    {id:0,name:'Once at St. Basils Cathedral ',price:"2,390",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__4.jpeg"},
    {id:0,name:'Colosseum of  Roma',price:"2,800",img:"https://img2.pic.in.th/pic/LINE_ALBUM_Ppp__3.jpeg"},
    {id:0,name:'Pisa Piazza',price:"2,800",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__2.jpeg"},
    {id:0,name:'State of Newyork',price:"2,900",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__11.jpeg"},
    {id:0,name:'Eiffel de Paris',price:"2,850",img:"https://img2.pic.in.th/pic/LINE_ALBUM_Ppp__10.jpeg"},
    {id:0,name:'Powering of Meple',price:"2,950",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__12.jpeg"},
    {id:0,name:'Red Bus',price:"2,900",img:"https://img2.pic.in.th/pic/LINE_ALBUM_Ppp__16.jpeg"},
    {id:0,name:'Tuk Tuk Thailand',price:"2,850",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__8.jpeg"},
    {id:0,name:'Daimond Tuk Tuk',price:"2,890",img:"https://img5.pic.in.th/file/secure-sv1/LINE_ALBUM_Ppp__14.jpeg"},
  ]

  const handleRadioChange = (e) => {
    const imgChange = e.target.img
    console.log(imgChange)
    setImg(e.target.alt)
    console.log(e.target.alt)

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
              <Route path='/product' element={<><ProductShop Card={CardProduct}/></>}/>
              <Route path='/product/custom' element={<> <Product Card={Card} allProduct={allProduct} image={img} setimg={setImg}/> </>}/>
              <Route path='/product/confirm' element={<><Cart cart={cartProductAll}  total={totalPrice}/></>}/>
              <Route path='/joint' element={<><Joint Card={Jointshop} genaral={genaralJoint} festival={festivalJoint} country={countryJoint}/></>}/>
              <Route path='/contact' element={<><Contact/>  </>}/>
          </Routes>
        
      <Foot/>
      </div>
    </DataContext.Provider>
  )
}

export default App
