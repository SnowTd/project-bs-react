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
import Community from './components/Community'

function App() {


  
  const colorProduct = [
    {id:0,header:'CUSTOM SIZE',title: '31mm.',content: 'Content',price:"9900",detail: 'detail',img:'https://img5.pic.in.th/file/secure-sv1/42325ce2c757500366.jpeg',},
    {id:1,header:'CUSTOM SIZE',title: '36mm.',content: 'Content',price:"11900",detail: 'detail ',img:'https://img2.pic.in.th/pic/447607682126d5857c.jpeg'},
  ]
  const clockFaceProduct = [
    {id:0,header:'CUSTOM CLOCKFACE',title: 'Deep Ocean',content: 'Content',price:"2500",detail: 'detail',img:'https://img2.pic.in.th/pic/b41e7a2d3d74e62ba7be13e109433395.png',},
    {id:1,header:'CUSTOM CLOCKFACE',title: 'Milky Way',content: 'Content',price:"1900",detail: 'detail ',img:'https://img5.pic.in.th/file/secure-sv1/-2253fb771b9410cf5.png'},
    {id:2,header:'CUSTOM CLOCKFACE',title: 'Gold Glamorous',content: 'Content',price:"2500",detail: 'detail ',img:'https://img2.pic.in.th/pic/00ab1b3348e77aaea2b5373ccd09ce56.png'},
    {id:2,header:'CUSTOM CLOCKFACE',title: 'Rainbow Splash',content: 'Content',price:"2900",detail: 'detail ',img:'https://img2.pic.in.th/pic/818491776a80d69258d8940aad4f3007.png'},
  ]
  const materialProduct = [
    {id:0,header:'CUSTOM MATERIAL',title: 'Titanium',content: 'Content',price:"9800",detail: 'detail',img:'https://img2.pic.in.th/pic/818491776a80d69258d8940aad4f3007.png',},
    {id:1,header:'CUSTOM MATERIAL',title: 'Pink Gold',content: 'Content',price:"14900",detail: 'detail ',img:'https://img2.pic.in.th/pic/301f28d2b0b919bd1d57899f73897fc9.png'},
    {id:2,header:'CUSTOM MATERIAL',title: 'Yellow Gold',content: 'Content',price:"17900",detail: 'detail ',img:'https://img5.pic.in.th/file/secure-sv1/f8133bd9be1941cc476da9221f221dba.jpeg'},
  ]
  const clockHandProduct = [
    {id:0,header:'CUSTOM CLOCKHAND',title: 'White Dragonfly',price: '1000',content:"",img: 'https://img5.pic.in.th/file/secure-sv1/1e744f3719435f86d84b662c5364d340.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Vintage Era',price: '850',content:"",img: 'https://img2.pic.in.th/pic/8528351fc7717459a289e0a4a668341d.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Golden Arrow',price: '890',content:"",img: 'https://img5.pic.in.th/file/secure-sv1/55198814365b1b4f0668b04701fa7bcf.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Old Beetles',price: '790',content:"",img: 'https://img2.pic.in.th/pic/6a426b98eae2da8d88cd42857350cf25.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Butterfly Rocket',price: '850',content:"",img: 'https://img5.pic.in.th/file/secure-sv1/959a306e448d0a5f565c83c65d41713b.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Blue Shark',price: '890',content:"",img: 'https://img2.pic.in.th/pic/0f4b1abac5b3769cc6daabbacc229694.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Common Luxury',price: '690',content:"",img: 'https://img2.pic.in.th/pic/0f4b1abac5b3769cc6daabbacc229694.jpeg',detail:'detail',},
    {id:0,header:'CUSTOM CLOCKHAND',title: 'Morning Pumpkin ',price: '750',content:"",img: 'https://img5.pic.in.th/file/secure-sv1/883b1f6140438b5d5e8ba6fb7b7ba54d.jpeg',detail:'detail',},
  ]
  const NumberProduct = [
    {id:0,header:'CUSTOM NUMBER',title: 'Sticks',content: 'Content',price:"690",detail: 'detail',img:'https://media.discordapp.net/attachments/1218959274017816579/1218962350217101392/600169a6cb258857.png?ex=66099227&is=65f71d27&hm=79f735c3bf360fbb2415dce11e7083bcd92af75b160058dd0fcbd83b7a9f5594&=&format=webp&quality=lossless&width=468&height=662',},
    {id:1,header:'CUSTOM NUMBER',title: 'Roman number',content: 'Content',price:"890",detail: 'detail ',img:'https://media.discordapp.net/attachments/1218959274017816579/1218962351131197610/9e3d8b5a8a1eab0b.png?ex=66099227&is=65f71d27&hm=a1d8476606f8a16cd79549dd7822ced96f9859da5892c0f32477fd0ccb31ccb0&=&format=webp&quality=lossless&width=468&height=662'},
    {id:2,header:'CUSTOM NUMBER',title: 'Arabic number',content: 'Content',price:"790",detail: 'detail ',img:'https://media.discordapp.net/attachments/1218959274017816579/1218962350565101588/b0a856cdd8d310d7.png?ex=66099227&is=65f71d27&hm=3efa5c0d733ef837d925ba4f1fef795a54cf31c64a3d8deb339f5442b330b6e1&=&format=webp&quality=lossless&width=468&height=662'},
  ]
  const DiamondProduct = [
    {id:0,header:'CUSTOM DIAMOND',title: 'Yellow Daimond',content: 'Content',price:"175000",detail: 'detail',img:'https://img2.pic.in.th/pic/14a4d2fb746dc564f.png',},
    {id:1,header:'CUSTOM DIAMOND',title: 'White Daimond',content: 'Content',price:"115000",detail: 'detail ',img:'https://img5.pic.in.th/file/secure-sv1/2202e295679c901f2.png'},
    {id:2,header:'CUSTOM DIAMOND',title: 'Pink Daimond',content: 'Content',price:"135000",detail: 'detail ',img:'https://img2.pic.in.th/pic/350dc005f33e632ac.png'},
    {id:2,header:'CUSTOM DIAMOND',title: 'Don\'t need Diamond',content: 'Content',price:" ",detail: 'detail ',img:''},
  ]

  const allProduct = [{name:materialProduct,header:materialProduct[0].header},{name:colorProduct,header:colorProduct[0].header},{name:clockFaceProduct,header:clockFaceProduct[0].header},{name:clockHandProduct,header:clockHandProduct[0].header},{name:NumberProduct,header:NumberProduct[0].header},{name:DiamondProduct,header:DiamondProduct[0].header}]
  const [totalPrice,setTotalPrice] = useState(0) 
  const [priceColor,setPriceColor] = useState(0)
  const [priceFace,setPriceFace] = useState(0)
  const [priceMaterial,setPriceMaterial] = useState(0)
  const [priceHand,setPriceHand] = useState(0)
  const [priceNumber,setPriceNumber] = useState(0)
  const [productDiamond,setProductDiamond] = useState("")
  const [priceDiamond,setPriceDiamond] = useState(0)
  const [pricetDiamond,setPricetDiamond] = useState("")
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
      
    } else if (e.target.name === DiamondProduct[0].header) {
      setProductDiamond(e.target.title)
      setPricetDiamond(e.target.value)
      setPriceDiamond(e.target.value)
    }

}
  useEffect(()=> {
    const sum = +priceColor + +priceFace + +priceMaterial+ +priceHand + +priceNumber + +priceDiamond
    const img_Id = colorProduct.indexOf((e) => e.id === imgId)
    const setimage = colorProduct[imgId].img
    const cartConfirm =[productColor,productFace,productHand,productMaterial,productNumber,productDiamond]
    const cartConfirmP =[pricetColor,pricetFace,pricetHand,pricetMaterial,pricetNumber,pricetDiamond]
    setCartProductP(cartConfirmP)
    setCartProduct(cartConfirm)
    const objectProduct = [
      {name:productColor,price:pricetColor},
      {name:productFace,price:pricetFace},
      {name:productHand,price:pricetHand},
      {name:productMaterial,price:pricetMaterial},
      {name:productNumber,price:pricetNumber},
      {name:productDiamond,price:pricetDiamond},
    ]
    setCartProductAll(objectProduct)
    setTotalPrice(sum.toFixed(2))
  },[checkedandValue,priceColor,priceFace,priceMaterial,priceHand,priceNumber,priceDiamond])
  
  return (
    <DataContext.Provider value={{tt:totalPrice,oc:handleRadioChange}}>
      <div className=' transition ease-in'>
        <Nav/>
          <ScrollToTop/>
          <Routes>
              <Route path='/' element={<><Hcontent/><Content/><Collection/><AboutUs/></>}/> 
              <Route path='/product' element={<><ProductShop Card={CardProduct}/></>}/>
              <Route path='/custom' element={<> <Product Card={Card} allProduct={allProduct} image={img} setimg={setImg}/> </>}/>
              <Route path='/confirm' element={<><Cart cart={cartProductAll}  total={totalPrice}/></>}/>
              <Route path='/joint' element={<><Joint Card={Jointshop} genaral={genaralJoint} festival={festivalJoint} country={countryJoint}/></>}/>
              <Route path='/community' element={<> <Community/> </>}/>
              <Route path='/contact' element={<><Contact/>  </>}/>
          </Routes>
        
      <Foot/>
      </div>
    </DataContext.Provider>
  )
}

export default App
