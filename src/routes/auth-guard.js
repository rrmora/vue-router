const isAuthenticatedGuard = async (to, from, next) => {
    return new Promise((resolve, reject) => {
        const rnd = Math.random() * 100
        if (rnd > 50) {
            console.log('Esta Autenticado')
            next()
        } else {
            console.log('Bloqueado por el isAuthenticatedGuard')
        }
    })
}

export default isAuthenticatedGuard