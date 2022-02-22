import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";
import axios from 'axios'


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(products)
    const fetchProducts = async () => {
        const response = await axios.get("http://fakestoreapi.com/products").catch((error) => {
            console.log("Error", error)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="ui grid container paddingcustome">
            <ProductComponent />
        </div>
    )

}

export default ProductListing
