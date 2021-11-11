export function currency(c){
    return '$' + Number(c.toFixed(1).toLocaleString()) + ' '
}


