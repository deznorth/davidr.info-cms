const ls = require('local-storage');
const dev = process.env.NODE_ENV !== 'production';
const auth = {};

auth.isLoggedIn = () => {
    if(dev){
        return true
    } else{
        const token = ls.get('auth_token');
        return !!token;
    }
}

auth.logout = () => {
    try{
        ls.remove('auth_token');
    } catch(e){
        return false;
    }
    return true;    
}

export default auth;