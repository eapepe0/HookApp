import React from 'react'
import { UserProvider } from './context/UserProvider'
import { Routes, Route, Navigate , Link } from 'react-router-dom'

import { HomePage, LoginPage, AboutPage , Navbar } from './index2'

export const MainApp = () => {
    return (
        <UserProvider>{/* aca seria el HOC o high order component o componente de orden alto, el componente de donde sale todo */}
            <h1>Main App</h1>
        
            <Navbar />
            <hr />

            <Routes> {/* aca empiezan las rutas */}
                <Route path="/" element={<HomePage />} /> {/* la ruta con el path index (/) seria el componente HomePage */}
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                {/* <Route path='/*' element = {<LoginPage/>} /> */} {/* una forma de agarrar el error 404 pagina no encontrada , te redirecciona al login */}
                <Route path="/*" element={<Navigate to='./' />} /> {/* de esta forma redirecciona  si usamos una url inexistente*/}
            </Routes>
        </UserProvider>
    )
}
