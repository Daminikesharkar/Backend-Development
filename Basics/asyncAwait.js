async function print(){
    console.log('a');
    console.log('b');

    await new Promise((resolve)=>{ setTimeout(()=>{console.log('c')
    resolve()
    },3000)})
    await new Promise((resolve)=>{ setTimeout(()=>{console.log('d') 
    resolve()},3000)})

    await new Promise((resolve)=>{ console.log('e') 
    resolve()})
        
}

print();