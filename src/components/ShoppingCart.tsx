import React from 'react'
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from "../data/items.json"
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';


type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (<Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                <CartItem key = {item.id} {...item} />))}
                <div className="ms-auto fw-bold fs-5">
                    Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0))}
                </div>
                <Link to="/checkout" style={{textDecoration: 'none'}}>
                    <div className="d-grid gap-2">
                    <Button variant="outline-success" size="lg">Checkout</Button>
                    </div>
                </Link>
                
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}