import {useState, useEffect} from "react"
import type { Product } from "../data/products"

export type cart = {
    id: number
    name: string
    price: number
    quantity: number
}

export function useCart() {
    const [cart,setCart]=useState<cart []>(()=>{
        try {
         const cartData = localStorage.getItem("cart")
         return cartData ? JSON.parse(cartData) : []
        } catch (error) {
            console.error("Error loading cart from localStorage")
            return []
        }
    })
    useEffect(()=>{
try {
    localStorage.setItem("cart", JSON.stringify(cart))
} catch (error) {
    console.error("Error saving cart to localStorage")
}
},[cart])

// Sync across tabs

useEffect(()=>{
    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "cart") {
            try {
                const newCart = event.newValue ? JSON.parse(event.newValue) : []
                setCart(newCart)
            } catch (error) {
                console.error("Error parsing cart from localStorage")
            }
        }
    }
    window.addEventListener("storage", handleStorageChange)
    return () => {
        window.removeEventListener("storage", handleStorageChange)
    }
},[])

const addToCart = (product: Product) => {
    setCart(currentCart => {
        const existingItem =  currentCart.find(item => product.id === item.id)
        if(existingItem){
            return (currentCart.map(item => product.id === item.id ? {...item , quantity : item.quantity + 1} : item))
        }
        return [...currentCart, {...product , quantity : 1}]
    })
}

const removeFromCart = (id: number) => {
    setCart(currentCart => {
        return (currentCart.filter(item => item.id !== id))
    })
}
const updatedQuantity = (productId:number , quantity: number) => {
    if( quantity < 1) return
    setCart(currentCart => 
        currentCart.map(item => 
            item.id === productId ? {...item , quantity : quantity} : item
        )
    )
}

}

