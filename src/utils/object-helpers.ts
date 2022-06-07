export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjectProps: {}): any[] =>{
    return items.map(user => {
    if(user[objPropName] === itemId){
        return {...user, ...newObjectProps}
    }
    return user;
})
}