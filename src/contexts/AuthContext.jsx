// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Cria o contexto
const AuthContext = createContext();

const data = { 
    email: 'piloukos45@gmail.com',
    password: '05061990Crak10@',
};

// Provedor de contexto
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = async (email, password) => {
        setLoading(true);
        try {

            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    if (email.toLowerCase() === data.email.toLowerCase() && password === data.password) {
                        resolve(true); // Sucesso
                    } else {
                        resolve(false); // Falha
                    }
                }, 3000); // 3 segundos de atraso
            });

            return result

        } catch (err) {
            console.log("error auth", err);
            setError(err.response?.data.message || error);
            setUser(null);
            return { success: false, message: err.response?.data.message || 'Erro inesperado' }; // Retorna erro
        } finally {
            setLoading(false);
            console.log("user", user);
        }
    };

    const logoutUser = () => {
        setUser(null); // Limpa os dados do usuário
    };

    return (
        <AuthContext.Provider value={
                { 
                    user,
                    loading, 
                    error, 
                    loginUser, 
                    logoutUser,
                    setLoading
                }
            }>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
