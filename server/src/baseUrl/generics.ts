

const addUid =  <T extends {name: string, age: number}> (obj : T) : T => {
    const uid = Math.floor(Math.random() * 1000);
    return {...obj, uid}
} 

const docOne = addUid({name: 'shuan', age: 25})

console.log(docOne.name)



interface IResource <T> {
    name: string,
    age: number,
    data: T
}

const resource :IResource<object> = {
    name: 'jin',
    age: 4,
    data: {name: 'smith'}
}

const docTwo : IResource<string[]> ={
    name: 'sam',
    age: 15,
    data: ['smith']
}