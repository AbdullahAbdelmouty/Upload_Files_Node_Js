const fomrDataDOM = document.getElementById('form-data');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const uploadInput = document.getElementById('file-upload');
const containerDOM = document.querySelector('.container');
let imageSrc = '';
const url = '/api/v1/products';
uploadInput.addEventListener('change',async (e)=>{
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image',imageFile)
    try {
     const {data:{image:{src}}} = await axios.post(`${url}/upload`,formData,{
      headers:{
       'Content-Type':'multipart/form-data'
      }
     })
     imageValue = src
     console.log(imageValue);
    } catch (error) {
      imageValue = null
     console.log(error);
    }
   })

fomrDataDOM.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const name = nameInput.value;
    const price = priceInput.value;
    const data = {
        name,
        price,
        image:imageValue
    }
    try {
        const {data:{product}} = await axios.post(url,data);
        console.log(product);
        getAllProducts();
    } catch (error) {
        console.log(error);
    }
})

const getAllProducts = async () => {
    try {
        const {data:{products}} = await axios.get(url);
        console.log(products);
        const productsDOM = products.map((product)=>{
            return `<article class="product">
            <img src="${product.image}" alt="${product.name}" class="img"/>
            <footer>
            <p>${product.name}</p>
            <span>$${product.price}</span>
            </footer>
            </article>`
            }).join('')
            containerDOM.innerHTML = productsDOM
    } catch (error) {
        console.log(error);
    }
};

getAllProducts();