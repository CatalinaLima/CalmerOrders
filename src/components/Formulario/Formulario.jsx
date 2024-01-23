import {useState} from 'react';
import './Formulario.css';

function Formulario() {
    const [ordenesDelDia, setOrdenesDelDia] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevaOrden = {
            titulo,
            descripcion,
            precio
        };

    setOrdenesDelDia([...ordenesDelDia, nuevaOrden])

    setTitulo('');
    setDescripcion('');
    setPrecio('');
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
    
        // Actualizar el estado correspondiente según el id del input
        switch (id) {
            case 'titulo':
                setTitulo(value);
            break;
            case 'descripcion':
                setDescripcion(value);
            break;
            case 'precio':
                setPrecio(value);
            break;
            default:
            break;
        }
    }

    const handleEliminarOrden = (index) => {
        const nuevasOrdenes = [...ordenesDelDia];
        nuevasOrdenes.splice(index, 1);
        setOrdenesDelDia(nuevasOrdenes);
    };



    return (
    <div>
        <div className='general'>
            <form className="form" onSubmit={handleSubmit}>
                <div className='form2'>
                    <h1 className='title1'>INGRESO DE ORDEN</h1>
                <div className='div'>
                <label htmlFor="titulo">Titulo</label>
                <input
                className='input'
                type="text"
                id='titulo'
                value = {titulo}
                onChange={handleChange}
                />
            </div>
            <div className='div'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                id='descripcion'
                className='input2'
                value = {descripcion}
                onChange={handleChange}
                />
            </div>
            <div className='div'>
                <label htmlFor="precio">Total</label>
                <input
                type="number"
                id='precio'
                className='input'
                value = {precio}
                onChange={handleChange}
                />
            </div>
            <div>
                <button className='button' type="submit">GUARDAR</button>
            </div>
            <div className='totalOrders'>
            <h1 className='title1'>TOTAL DEL DIA</h1>
            <div>
            ${ordenesDelDia.reduce((total, orden) => total + parseFloat(orden.precio), 0)}
            </div>
        </div>
            </div>
            
        </form>
        <div className='container'>
            <div className='orders'>
            <h1 className='title1'>ORDENES DEL DIA</h1>
            <ul className='pileorders'>
                {ordenesDelDia.map( (orden, index) => (
                    <li className='order' key={index}>
                        <div className='order2'>
                        <h2>{orden.titulo}</h2>
                        <p>{orden.descripcion}</p>
                        <h3>Total: ${orden.precio}</h3>
                        </div>
                        <div className='order3'>
                        <img className='deleteIcon' src='/public/assets/delete-307-48.png' alt='Eliminar' onClick={() => handleEliminarOrden(index)}/>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        
        </div>
        
        </div>
    );
}

export default Formulario;