const apiUrl = 'https://localhost:7197/api/Livros/'; // NÃO ESQUEÇA DE COLOCAR A URL CORRETA AQUI, POIS PODE MUDAR!

async function fetchApi(url, method, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });
        const contentType = response.headers.get('Content-Type');
        
        if (!response.ok) {
            let errorMessage = `Error! status: ${response.status}`;
            if (contentType && contentType.includes('application/json')) {
                try {
                    const errorResponse = await response.json();
                    errorMessage = errorResponse.message || errorMessage;
                } catch (jsonError) {
                    console.error("Error parsing JSON error response:", jsonError);
                }
            }
            throw new Error(errorMessage);
        }
        

        if (response.status === 204) return null;


        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return response.text();
        }
    } catch (error) {
        console.log('Fetch error: ', error);
        throw error;
    }
}


function getLivros() {
    return fetchApi(apiUrl, 'GET');
}

function criarLivro(data) {
    return fetchApi(apiUrl, 'POST', data);
}

function atualizarLivro(id, data) {
    return fetchApi(`${apiUrl}${id}`, 'PUT', data);
}

function deletarLivro(id) {
    return fetchApi(`${apiUrl}${id}`, 'DELETE'); 

}
