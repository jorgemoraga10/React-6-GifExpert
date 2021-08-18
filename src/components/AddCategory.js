
import React,{useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories} ) => {

    const  [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            //console.log('Submit Hecho');
            setCategories( catg => [ inputValue, ...catg ] );   //catg contiene el stado anterio de las categorias
            setInputValue('');
        };

    }

    return (
        <>  
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ inputValue } onChange={ handleInputChange }/>
            </form>           
        </>
    )
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,  
}