import React, { useState } from "react";
import add from "../img/gallery.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from "react-router-dom";

function Register() {
    const [err, setErr] = useState(false);
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, `${displayName}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", 
                null,
                (error) => {
                    console.error(error);
                    setErr(true);
                }, 
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(storageRef);
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        });
                        await setDoc(doc(db,"userChats",res.user.uid),{})
                        navigate("/")
                    } catch (error) {
                        console.error(error);
                        setErr(true);
                    }
                }
            );
        } catch (error) {
            console.error(error);
            setErr(true);
        }
    };

    return (
        <div className="formcontainer">
            <div className="formwrapper">
                <span className="logo">CONNECTIFY</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Displayname" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button type="submit">Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Do you have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}

export default Register;
