describe('Probando jest', () =>{
   test('Prueba de objetos iguales', ()=>{
       const dato1 ={
           nombre:'Denisse González',
           edad: 21
       };
       const dato2={
           nombre:'Denisse González',
           edad:21
       };
       expect(dato1).toEqual(dato2);
   });
});