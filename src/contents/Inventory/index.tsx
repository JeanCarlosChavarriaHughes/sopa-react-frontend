import React from 'react';
import ContentLayout from "../../layouts/ContentLayout";
import IconButton from "../../components/IconButton";
// import './style.scss';
// import Row from './row';

const Inventory = () => {
  return (
    <ContentLayout title="Inventario de productos" description="Revisa tus productos en venta y los materiales que los componen.">
      <div className="content-expenses">
        <div className="flex mb-30">
          <IconButton outlined onClick={() => { }} size={25} icon={ <div className="text-24 text-primary text-center" style={{ lineHeight: '24px' }}>+</div> }/>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>        
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>        
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>
          <div className= "tipo h-25 text-12 cursor-pointer ml-10 ph-8" >Categoría</div>        
        </div>
      </div>
    </ContentLayout>
 )
};

export default Inventory;