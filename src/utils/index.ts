const compose = (...func:any) => (comp:any) =>{
    return func.reduceRight (
        (wrapped:any, f:any) => f(wrapped), comp);

}

export {compose};