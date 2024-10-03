// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Importa useNavigate

// Cria o contexto
const AuthContext = createContext();

// Provedor de contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')); // Adiciona estado para isLoggedIn

    // const navigate = useNavigate(); // Inicializa o useNavigate

    const loginUser = async (email, password) => {
        setLoading(true);
        try {
            const response = await fetch('https://hospeda-back-end-production.up.railway.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                // Login bem-sucedido
                localStorage.setItem('token', data.token);
                localStorage.setItem('_id', data._id); // Salva o token no localStorage
                setIsLoggedIn(true); // Atualiza o estado para indicar que o usuário está logado
                return true;
            } else {
                // Falha no login
                return false;
            }
        } catch (err) {
            console.log("Error during authentication:", err);
            setError(err.response?.data.message || 'Erro inesperado');
            setUser(null);
            return { success: false, message: err.response?.data.message || 'Erro inesperado' }; // Retorna erro
        } finally {
            setLoading(false);
            console.log(localStorage.getItem('token'));
        }
    };

    const logoutUser = () => {
        setUser(null); // Limpa os dados do usuário
        localStorage.removeItem('token'); // Remove o token do localStorage
        setIsLoggedIn(false); // Atualiza o estado para indicar que o usuário não está mais logado
    };

    // Verifica se o usuário está autenticado
    useEffect(() => {
        const token = localStorage.getItem('token'); // Verifica se o token existe no localStorage

        if (token) {
            // Faz a requisição para verificar o token
            axios
                .get('https://hospeda-back-end-production.up.railway.app/api/verify-token', { 
                    headers: { 
                        Authorization: `Bearer ${token}`,
                        UserId:_id,
                    } 
                })
                .then((response) => {
                    // Verifica se a mensagem de retorno é "Token válido"
                    console.log(response.data);

                    if (response.data.message === 'Token válido') {
                        localStorage.setItem('token', response.data.token)
                        console.log('Token verificado com sucesso:');
                        setUser(response.data.user); // Armazena os dados do usuário
                        setIsLoggedIn(true); // Marca o usuário como autenticado
                    } else {
                        console.log('Token inválido, removendo token...');
                        localStorage.removeItem('token'); // Remove o token se for inválido
                        setIsLoggedIn(false); // Marca o usuário como não autenticado
                    }
                })
                .catch((error) => {
                    console.error('Erro ao verificar o token:', error);
                    localStorage.removeItem('token'); // Remove o token se houver erro
                    setIsLoggedIn(false); // Marca o usuário como não autenticado
                });
        } else {
            console.log('Nenhum token encontrado, redirecionando para login.');
            setIsLoggedIn(false); // Marca o usuário como não autenticado
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            error, 
            isLoggedIn,
            loginUser, 
            // logoutUser, // usar para deslogar o usuário
            setLoading,
            
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
