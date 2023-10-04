import { useContext, useEffect, useState, } from 'react'
import PropTypes from 'prop-types'
import { FormControl, Input, InputLabel, SubmitButton } from '../../css-components/css-components';
import { AppData } from '../../App'
import Head from '../Head/Head';


const ProductDataForm = () => {
  const { onCreateNewProduct } = useContext(AppData)
  const [canSendData, setCanSendData] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [proID, setProID] = useState(10)

  const [formData, setFormData] = useState({
    productID: {proID},
    productName: '',
    productPhoto: '',
    productRate: '',
    productPrice: 1

  })

  const handleInputChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }


  const validateFormData = () => {
 
    if (formData.productName.length === 0) {
      return false
    }

    if (formData.productRate.length == 0) {
      return false
    }

    return true;
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    if (validateFormData()) {
        setIsCreating(true)
        onCreateNewProduct(formData)
        setProID(proID + 1)
        setIsCreating(false)
      }
      return
    }



  useEffect(() => {
    if (validateFormData()) {
      setCanSendData(true);
    }
    else {
      setCanSendData(false);
    }

  }, [formData])


  return (
    <>
    <Head />
    <form onSubmit={handleFormSubmit}>
      {/* <pre>
        {
          JSON.stringify(formData, null, 2)
        }
      </pre> */}
      <FormControl>
        <InputLabel>Product Name</InputLabel>
        <Input name='productName' value={formData.productName} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel >Product Rate</InputLabel>
        <Input name='productRate' value={formData.productRate} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel >Product Photo</InputLabel>
        <Input type="file" name='ProductPhoto' value={formData.productPhoto} onChange={handleInputChange} />
      </FormControl>

      <FormControl>
        <InputLabel>Price Range</InputLabel>
        <input type="range" name="productPrice" min="1" max="100"
          value={formData.productPrice} onChange={handleInputChange}
        />
      </FormControl>

      <FormControl noBorder>
        <SubmitButton disabled={!canSendData | isCreating} bgColor='#b56215' bgHoverColor="#d07725" type='submit'>{isCreating ? 'Loading ...' : 'Submit'}</SubmitButton>
      </FormControl>
    </form>
    </>
  )
}

ProductDataForm.propTypes = {
  onNewProduct: PropTypes.func.isRequired
}

export default ProductDataForm



/* 
http://localhost:5173/?productName=iPhone+15&productSKU=DDD-iphone-15&productCount=10000&productCategory=mobiles&productBrand=apple&productPrice=50000000&productDescription=dsf+sdf+sdf+sdf+sd+sdf

*/