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
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Adiciona estado para isLoggedIn

    // Método para login do usuário
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
    
            // Verifique se a resposta é ok (status 200-299)
            if (!response.ok) {
                const errorData = await response.json(); // Tenta pegar a mensagem de erro da resposta
                return errorData.message || 'Erro no login. Tente novamente.' ; // Retorna erro com mensagem
            }
    
            const data = await response.json();
            console.log(data);
    
            // Login bem-sucedido
            localStorage.setItem('token', data.token);
            localStorage.setItem('_id', data._id);
            localStorage.setItem('refreshToken', true);
            setIsLoggedIn(true);
            setUser(data.user); // Armazena os dados do usuário
    
            // return true ; // Retorna sucesso
    
        } catch (err) {
            console.log("Error during authentication:", err);
            setError(err.message || 'Erro inesperado'); // Atualiza a mensagem de erro
            setUser(null);
            return { success: false, message: err.message || 'Erro inesperado' }; // Retorna erro
        } finally {
            setLoading(false);
            console.log(localStorage.getItem('token'));
        }
    };
    

    // Método para logout do usuário
    const logoutUser = () => {
        setUser(null); // Limpa os dados do usuário
        localStorage.removeItem('token'); // Remove o token do localStorage
        localStorage.removeItem('refreshToken');
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
                    }
                })
                .then((response) => {
                    // Verifica se a mensagem de retorno é "Token válido"
                    console.log(response.data);
    
                    if (response.data.message === 'Token válido') {
                        // Salva o novo token apenas se for retornado um novo token na resposta
                        if (response.data.token) {
                            localStorage.setItem('token', response.data.token);
                        }
                        console.log('Token verificado com sucesso:');
                        setUser(response.data.user); // Armazena os dados do usuário
                        setIsLoggedIn(true); // Marca o usuário como autenticado
                    } else {
                        console.log('Token inválido, tentando renovar...');
                        handleTokenRefresh(); // Tenta renovar o token
                    }
                })
                .catch((error) => {
                    console.error('Erro ao verificar o token:', error);
                    // Se houver erro na verificação do token, tenta renovar antes de deslogar
                    handleTokenRefresh();
                });
        } else {
            console.log('Nenhum token encontrado, redirecionando para login.');
            setIsLoggedIn(false); // Marca o usuário como não autenticado
        }
    }, []);
    
    // Função para renovar o token
    const handleTokenRefresh = async () => {
        const refreshToken = localStorage.getItem('refreshToken'); // Supondo que você armazene o refreshToken
    
        if (refreshToken) {
            try {
                const response = await axios.post('https://hospeda-back-end-production.up.railway.app/api/refresh-token', { refreshToken });
                localStorage.setItem('token', response.data.token); // Atualiza o token no localStorage
                console.log('Token renovado com sucesso');
                setIsLoggedIn(true); // Mantém o usuário logado
            } catch (error) {
                console.error('Erro ao renovar o token:', error);
                localStorage.removeItem('refreshToken');
                logoutUser(); // Faz logout se o refresh falhar
            }
        } else {
            console.log('Nenhum refreshToken disponível. Fazendo logout...');
            logoutUser();
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            error, 
            isLoggedIn,
            loginUser, 
            logoutUser, // usar para deslogar o usuário
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
