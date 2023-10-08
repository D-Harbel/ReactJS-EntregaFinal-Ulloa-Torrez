import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";


const CheckOut = () => {
    const { cart, total, clearCart } = useContext(CartContext)
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState('');
    const [ordenId, setOrdenID] = useState("");

}


export default CheckOut