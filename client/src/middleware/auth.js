
const dev = process.env.NODE_ENV !== 'production';
const auth = {};

auth.isLoggedIn = () => {
    if(dev){
        return true
    } else{
        const token = localStorage.getItem('auth_token');
        return !!token;
    }
}

auth.logout = () => {
    try{
        localStorage.removeItem('auth_token');
    } catch(e){
        return false;
    }
    return true;    
}

export default auth;