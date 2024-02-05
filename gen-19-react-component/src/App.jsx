import React from 'react'
import Card from './components/Card';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function App() {

    const image = "https://notebooktherapy.com/cdn/shop/products/0120_00763_360x.jpg?v=1672662415";
    const nametag = "Tsuki Stencil Set ☾";
    const price = "Rp 287.162,07 IDR";

    const image2 = "https://notebooktherapy.com/cdn/shop/products/moonflower5_360x.jpg?v=1591867703";
    const image3 = "https://notebooktherapy.com/cdn/shop/products/ezgif.com-webp-to-jpg_11_360x.jpg?v=1571452068";
    const image4 ="https://notebooktherapy.com/cdn/shop/products/pop-up-letteringoriginal-16copy_360x.jpg?v=1652370200";
    
    
    return (
        <>
        <Header />
        <Navbar />
        <div className={'flex'}>
            <Card nametag={nametag} image={image} price={price}/>
            <Card nametag={"Tsuki Moonflower Journal ☾"} image={image2} price={"Rp 487.162,07 IDR"}/>
            <Card nametag={"Cord Tote Bag"} image={image3} price={"Rp 377.086,71 IDR"}/>
            <Card nametag={" Tsuki Pop-Up Pencil Case ☾"} image={image4} price={"Rp 314.186,51 IDR"}/>
        </div>
        </>
        
    );
}
