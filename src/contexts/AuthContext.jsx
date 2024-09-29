// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Cria o contexto
const AuthContext = createContext();

// Provedor de contexto
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            const data = { 
                email: 'piloukos45@gmail.com',
                password: '05061990Crak10@',
            };
    
            if (email.toLowerCase() === data.email.toLowerCase() && password === data.password) {
                setUser(data); // Armazena os dados do usuário
                setError(null); // Limpa qualquer erro anterior
                alert('Login efetuado com sucesso!');
            } 
        } catch (err) {
            setError(err.response?.data.message || 'Erro ao fazer login');
            setUser(null);
        } finally {
            setLoading(false);
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
                    logoutUser 
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
