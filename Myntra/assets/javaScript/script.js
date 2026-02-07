const categorieValues = [
    { label: "Tshirts", no_of_product: 267184 },
    { label: "Lounge Tshirts", no_of_product: 1638 }
    
  ];

const brandValues=[
    { label: "Moda Rapido", no_of_product: 12008 },
    { label: "WOOSTRO", no_of_product: 9439 },
    { label: "SZN", no_of_product: 5272 },
    { label: "Seekbuylove", no_of_product: 5064 },
    { label: "Roadster", no_of_product: 4722 },
    { label: "HRX by Hrithik Roshan", no_of_product: 4178 },
    { label: "Friskers", no_of_product: 3989 },
    { label: "Tommy Hilfiger", no_of_product: 3944 }
];

const colorsValues = [
  { label: "Black", no_of_product: 45461, showColor: true },
  { label: "White", no_of_product: 35977, showColor: true },
  { label: "Blue", no_of_product: 26196, showColor: true },
  { label: "Navy Blue", no_of_product: 19262, showColor: true },
  { label: "Green", no_of_product: 18204, showColor: true },
  { label: "Grey", no_of_product: 16693, showColor: true },
  { label: "Red", no_of_product: 12626, showColor: true }
];

const discountsValues =  [
  { label: "10% and above", value: 10 },
  { label: "20% and above", value: 20 },
  { label: "30% and above", value: 30 },
  { label: "40% and above", value: 40 },
  { label: "50% and above", value: 50 },
  { label: "60% and above", value: 60 },
  { label: "70% and above", value: 70 },
  { label: "80% and above", value: 80 },
  { label: "90% and above", value: 90 }
];
const categorie = document.getElementById("categorie");
innerHtml(categorieValues, categorie );

const brand = document.getElementById("brand");
innerHtml(brandValues, brand);

const  color = document.getElementById("fillter-display-color");
innerHtml( colorsValues, color);

const  discounts = document.getElementById("fillter-discounts");
innerHtmlDiscounts( discountsValues, discounts);

function innerHtml(values, insidehtml){
    values.forEach((item) => {
    insidehtml.innerHTML += `
      <div class="fillters-items">
        <input type="checkbox" name="${item.label}" id="${item.label}">
        ${item.showColor ? `<div class="color-display-fillter" style=" background-color: ${item.label};"></div>` : ''}
        <label for="${item.label}">${item.label}</label>         
        <span>(${item.no_of_product})</span>
      </div>`;
  });
}

function innerHtmlDiscounts(values, insidehtml){
    values.forEach((item) => {
    insidehtml.innerHTML += `
      <div class="fillters-items">
        <input type="radio" name="discounts" value="${item.value}" id="${item.label}">
        <label for="${item.label}">${item.label}</label>        
      </div>
    `;
  });
}





let productItems =[{img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/NOVEMBER/26/F2yaqUNr_1b07b7a4929f497d973dc79bb7a975fb.jpg",
  brand:"WROGN", discription:"Pack of 2 Cotton T-shirts", offerPrice:699, price:1399, discount:50, rating:4.3, noOfRatings:"2.3k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190500/2025/4/10/13d6add6-92dd-4eba-bbe7-85baf71bf6e81744302703137-DAMENSCH-Purple-Round-Neck-Raw-Edge-Crew-T-shirt-80517443027-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19190486/2025/4/10/ea264499-ce95-43a0-b69f-5aa7c35ba6311744302682122-DAMENSCH-Men-Raw-Edge-Premium-Cotton-Regular-Fit-T-Shirt-561-1.jpg",
  brand:"DAMENSCH", discription:"Raw Edge Crew T-shirt", offerPrice:703, price:890, discount:21, rating:4.3, noOfRatings:"2.7k"},
  
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12027436/2022/9/15/ea90445c-a37b-43ac-948b-8e291ec78dc31663221311972LevisMenWhiteSolidRoundNeckLoungeT-shirt1.jpg",
  brand:"Levis", discription:"Solid Lounge T-shirt", offerPrice:577, price:649, discount:11, rating:4.4, noOfRatings:"18k"},
  {img:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11468714/2025/7/25/438722c5-edef-4bf9-b416-58bdf0224b851753446336612-HM-Men-White-Solid-Cotton-Pure-Cotton-T-shirt-Regular-Fit-82-7.jpg",
  brand:"H&M", discription:"hello", offerPrice:199, price:2, discount: 2, rating:4.4, noOfRatings:"18k"}
  
  /* {img:"",
  brand:"", discription:"", offerPrice:, price:, discount:, rating:, noOfRatings:""}, */









];

const  productsVar = document.getElementById("products");
products(productItems,productsVar);
function products(products, innerHtmlVar){
  products.forEach((items)=>{
    innerHtmlVar.innerHTML+=`
    <div class="products-item">
      <img
        class="products-items-img"
        src="${items.img}"
        alt="image"
      />
      <div class="protuct-rating-container">
        <span>${items.rating}</span>
        <i class="fa-solid fa-star"></i>
        <span>|</span>
        <span>${items.noOfRatings}</span>
      </div>
      <div class="products-item-meta-data">
        <h3 class="products-item-meta-data-brand">${items.brand}</h3>
        <h4 class="products-item-meta-data-type">${items.discription}</h4>
        <div class="products-item-meta-data-price-box">
          <div class="products-item-meta-data-price-discount-price">Rs. ${items.offerPrice}</div>
          <div class="products-item-meta-data-price-price">Rs. ${items.price}</div>
          <div class="products-item-meta-data-price-discount">(${items.discount}% OFF)</div>
        </div>
      </div>
    </div>`;
  });
}




