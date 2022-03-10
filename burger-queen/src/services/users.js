import axios from 'axios'
import jwtDecode from "jwt-decode";


export const singIn = async (data, setModal, setStateModal, setLoading) => {

    try{
        const response = await axios.post("https://bq-api-2022.herokuapp.com/auth", data)
        
        const token = response.data.token;
        const decode = jwtDecode(token);
        const rol=(decode.roles.admin===true?"admin":decode.roles.name==="mesera"?"mesera":"cocinera")
        
        console.log(token)
        console.log(decode) 
        localStorage.setItem("token", token);
        localStorage.setItem("idUser", decode.uid);
        localStorage.setItem("role", rol);
        localStorage.setItem("nameUser", decode.nameUser)

        if(decode.roles.name === 'mesera') return  window.location.href="/newOrder";
        if(decode.roles.name === 'cocinera') return  window.location.href="/getOrders";
        return window.location.href="/settings";

    } catch (err) {
        setLoading(false)
        setStateModal(true)
        console.log(err)
        const response = err.response.data

        const message = response.message
        console.log(message)
        if(message === 'No ingresaste correo o contraseña') return setModal({ title: message, body: 'Inténtelo nuevamente' });
        if(message === 'El usuario no existe') return setModal({ title: message, body: 'Inténtelo nuevamente' });
        if(message === 'La contraseña es incorrecta, intente de nuevo') return setModal({ title: 'Contraseña incorrecta.', body: 'Inténtelo nuevamente' });
        if(response) return setModal({body:"Ocurrio un error en el sistema"})
    }
}

export const userInfo = async (url, id, header) =>{
    try{
        console.log(`${url}/users/${id}`)
        const getUser = await axios.get(`${url}/users/${id}`, header)
        return getUser.data
    } catch(e){
        console.error(e)
    }
}