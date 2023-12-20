// import express from "express";

// const app =express()

// app.get("/",(req,res)=>{
//     res.send("server is up")
// })
// app.get("/api/products",async(req,res)=>{
//     const products=[
//         {
//             id:1,
//             name:"table",
//             price:200,
//             image:"https://www.ulcdn.net/images/products/312898/slide/1332x726/Arabia_Dining_Table_TK_4.jpg?1609230340"
//         },
//         {
//             id:2,
//             name:"phone",
//             price:2000,
//             image:"https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52.fit_lim.size_1050x.jpg"
//         },
//         {
//             id:3,
//             name:"brush",
//             price:20,
//             image:"https://4.imimg.com/data4/UQ/GG/MY-22749763/paint-brushes.jpg"
//         },
//         {
//             id:4,
//             name:"paste",
//             price:100,
//             image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81QobQ9NgEL._AC_UF1000,1000_QL80_.jpg"
//         },
//         {
//             id:5,
//             name:"mouse",
//             price:1000,
//             image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CNGisjWUL._AC_UF1000,1000_QL80_.jpg"
//         }
    
//     ]
//     if (req.query.search) {
//         const filterProducts = products.filter(product => product.name.includes(req.query.search));
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         res.send(filterProducts);
//       } else {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         res.send(products);
//       }
//     });


import  express from "express"
const app = express();

app.get("/", (req, res) => {
  res.send("server is up");
});

app.get("/api/products", async (req, res) => {
  console.log("Request received at /api/products");
  const products=[
    {
        id:1,
        name:"table",
        price:200,
        image:"https://www.ulcdn.net/images/products/312898/slide/1332x726/Arabia_Dining_Table_TK_4.jpg?1609230340"
    },
    {
        id:2,
        name:"phone",
        price:2000,
        image:"https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-52.fit_lim.size_1050x.jpg"
    },
    {
        id:3,
        name:"brush",
        price:20,
        image:"https://4.imimg.com/data4/UQ/GG/MY-22749763/paint-brushes.jpg"
    },
    {
        id:4,
        name:"paste",
        price:100,
        image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81QobQ9NgEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id:5,
        name:"mouse",
        price:1000,
        image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CNGisjWUL._AC_UF1000,1000_QL80_.jpg"
    }

]

  if (req.query.search) {
    const filterProducts = products.filter(product => product.name.includes(req.query.search));
    await new Promise(resolve => setTimeout(resolve, 2000));
    res.send(filterProducts);
  } else {
    await new Promise(resolve => setTimeout(resolve, 2000));
    res.send(products);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
