
const uniq = <T extends {}>(arr: T[], field: keyof T)=>  arr.reduce<T[]>((os, o) => os.find((o2) => o2[field] === o[field]) ? os : [...os,o],[]);


export default uniq;