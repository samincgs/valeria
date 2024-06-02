import { SubmitButton } from '@/components/form/Buttons';
import CategoriesInput from '@/components/form/CategoriesInput';
import CounterInput from '@/components/form/CounterInput';
import CountriesInput from '@/components/form/CountriesInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { createPropertyAction } from '@/utils/actions';

const CreateRentalsPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        create property
      </h1>
      <div className='border md:max-w-6xl lg:max-w-7xl p-8 rounded-md shadow-sm'>
        <h3 className='text-xl mb-6 font-medium capitalize'>general info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <FormInput
              name='name'
              type='text'
              label='name (20 limit)'
              defaultValue='Cabin in Latvia'
            />
            <FormInput
              name='tagline'
              type='text'
              label='tagline (30 limit)'
              defaultValue='Dream Getaway Awaits You Here'
            />
            <PriceInput />
            <CategoriesInput />
            <CountriesInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name='description'
            labelText='Description (10 - 1000 words)'
          />
          <h3 className='text-xl mt-8 mb-4 font-medium capitalize'>
            accomodation details
          </h3>
          <CounterInput detail='guests' />
          <CounterInput detail='bedrooms' />
          <CounterInput detail='beds' />
          <CounterInput detail='baths' />
          <SubmitButton text='create rental' className='mt-12' />
        </FormContainer>
      </div>
    </div>
  );
};
export default CreateRentalsPage;
