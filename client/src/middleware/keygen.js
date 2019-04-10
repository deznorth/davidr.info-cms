
export const genKey = (seed = '', length = 16) => {
    const newSeed = seed.length > (length/2) ? seed.substr(0,Math.floor((length/2))) : seed;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = newSeed;

    for(let i = newSeed.length; i<length; i++){
        let randIndex = Math.floor(Math.random()*chars.length);
        key += chars.charAt(randIndex);
    }

    return key;
};