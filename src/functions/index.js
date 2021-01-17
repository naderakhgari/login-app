export const getTokenData = async (userData) => {
    const res = await fetch('https://api.bybits.co.uk/auth/token', {
        method: 'POST',
        headers: {
            environment: 'mock',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    return res.json()
}

export const getPolicyData = async (tokenData) => {
    const res = await fetch('https://api.bybits.co.uk/policys/details', {
        method: 'GET',
        headers: {
            environment: 'mock',
            'Content-Tyep': 'applicaton/json',
            authentication: tokenData
        }
    })
    return res.json()
}