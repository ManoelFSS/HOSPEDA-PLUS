

export  const handleFormatCelular = (e) => {
    let celularValue = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    // Limita a quantidade de números a 11 (padrão do celular no Brasil)
    if (celularValue.length > 11) {
        celularValue = celularValue.slice(0, 11);
    }
    // Adiciona a formatação (XX)XXXXX-XXXX sem o espaço após o DDD
    if (celularValue.length > 6) {
        celularValue = celularValue.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1)$2-$3"); // Formato completo (XX)XXXXX-XXXX
    } else if (celularValue.length > 2) {
        celularValue = celularValue.replace(/^(\d{2})(\d{0,5})$/, "($1)$2"); // Adiciona DDD e primeiros números, sem espaço
    } else if (celularValue.length > 0) {
        celularValue = celularValue.replace(/^(\d{0,2})$/, "($1"); // Apenas o DDD, sem adicionar espaço
    }

    return celularValue;
};


